import React, { useCallback, useEffect, useMemo, useState } from 'react';
import { MaterialReactTable } from 'material-react-table';
//Import Material React Table Translations
import { MRT_Localization_CS } from 'material-react-table/locales/cs';
import { Box, Button, IconButton, Tooltip } from '@mui/material';
import { Delete, Edit } from '@mui/icons-material';
import CreateModal from './CreateModal';
import EventPersonService from '../../../services/EventPersonService';

const EventPersonGrid = () => {
  //should be memoized or stable
  const columns = useMemo(
    () => [
      {
        accessorKey: 'id',
        header: 'ID',
        enableColumnOrdering: false,
        enableEditing: false, //disable editing on this column
        enableSorting: false,
        size: 80
      },
      {
        accessorKey: 'firstName', //access nested data with dot notation
        header: 'Jméno',
        size: 150
      },
      {
        accessorKey: 'lastName',
        header: 'Přijmení',
        size: 150
      },
      {
        accessorKey: 'email',
        header: 'Email',
        size: 150
      }
    ],
    []
  );

  const [createModalOpen, setCreateModalOpen] = useState(false);
  const [tableData, setTableData] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const response = await EventPersonService.GetAll();
      setTableData(response.data.data);
    }
    fetchData();
  }, []);

  const onSubmit = (values) => {
    EventPersonService.Create(values);
    tableData.push(values);
    setTableData([...tableData]);
  };

  const handleSaveRowEdits = async ({ exitEditingMode, row, values }) => {
    tableData[row.index] = values;
    EventPersonService.Update(values);
    //send/receive api updates here, then refetch or update local table data for re-render
    setTableData([...tableData]);
    exitEditingMode(); //required to exit editing mode and close modal
  };

  const handleDeleteRow = useCallback(
    (row) => {
      if (!confirm(`Opravdu chcete smazat záznam ${row.getValue('firstName')} ${row.getValue('lastName')}`)) {
        return;
      }
      console.log(row);
      EventPersonService.Delete(row.getValue('id'));
      //send api delete request here, then refetch or update local table data for re-render
      tableData.splice(row.index, 1);
      setTableData([...tableData]);
    },
    [tableData]
  );

  return (
    <>
      <MaterialReactTable
        localization={MRT_Localization_CS}
        columns={columns}
        data={tableData}
        enableEditing
        onEditingRowSave={handleSaveRowEdits}
        //onEditingRowCancel={handleCancelRowEdits}
        editingMode="modal" //default
        renderTopToolbarCustomActions={() => (
          <Button color="success" onClick={() => setCreateModalOpen(true)}>
            Vytvořit
          </Button>
        )}
        renderRowActions={({ row, table }) => (
          <Box sx={{ display: 'flex', gap: '1rem' }}>
            <Tooltip arrow placement="left" title="Upravit">
              <IconButton onClick={() => table.setEditingRow(row)}>
                <Edit />
              </IconButton>
            </Tooltip>
            <Tooltip arrow placement="right" title="Smazat">
              <IconButton color="error" onClick={() => handleDeleteRow(row)}>
                <Delete />
              </IconButton>
            </Tooltip>
          </Box>
        )}
      />
      <CreateModal
        columns={columns}
        open={createModalOpen}
        onClose={() => setCreateModalOpen(false)}
        onSubmit={onSubmit}
      />
    </>
  );
};

export default EventPersonGrid;
