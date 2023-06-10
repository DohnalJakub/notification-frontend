import React, { useMemo, useState } from 'react';
import { MaterialReactTable } from 'material-react-table';
//Import Material React Table Translations
import { MRT_Localization_CS } from 'material-react-table/locales/cs';
import { Button } from '@mui/material';
import CreateModal from './CreateModal';

const Events = () => {
  //should be memoized or stable
  const columns = useMemo(
    () => [
      {
        accessorKey: 'name', //access nested data with dot notation
        header: 'Název',
        size: 150
      },
      {
        accessorKey: 'userId',
        header: 'Osoba',
        size: 150
      }
    ],
    []
  );

  const [createModalOpen, setCreateModalOpen] = useState(false);
  const [tableData, setTableData] = useState([]);

  const handleAddItem = (values) => {
    console.log(values);

    tableData.push(values);
    setTableData([...tableData]);
  };

  return (
    <>
      <MaterialReactTable
        localization={MRT_Localization_CS}
        columns={columns}
        data={tableData}
        enableEditing
        editingMode="modal" //default
        renderTopToolbarCustomActions={() => (
          <Button color="success" onClick={() => setCreateModalOpen(true)}>
            Vytvořit
          </Button>
        )}
      />
      <CreateModal
        columns={columns}
        open={createModalOpen}
        onClose={() => setCreateModalOpen(false)}
        onSubmit={handleAddItem}
      />
    </>
  );
};

export default Events;
