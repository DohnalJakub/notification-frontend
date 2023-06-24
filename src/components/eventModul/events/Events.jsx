import React, { useMemo, useState } from 'react';
import { MaterialReactTable } from 'material-react-table';
//Import Material React Table Translations
import { MRT_Localization_CS } from 'material-react-table/locales/cs';
import { Button } from '@mui/material';
import CreateModal from './CrudModal';
export const data = [
  {
    id: '9s41rp',
    firstName: 'Kelvin',
    lastName: 'Langosh'
  },
  {
    id: '08m6rx',
    firstName: 'Molly',
    lastName: 'Purdy'
  },
  {
    id: '5ymtrc',
    firstName: 'Henry',
    lastName: 'Lynch'
  },
  {
    id: 'ek5b97',
    firstName: 'Glenda',
    lastName: 'Douglas'
  },
  {
    id: 'xxtydd',
    firstName: 'Leone',
    lastName: 'Williamson'
  }
];

const Events = () => {
  //should be memoized or stable
  const columns = useMemo(
    () => [
      {
        accessorKey: 'firstName', //access nested data with dot notation
        header: 'Jméno',
        size: 150
      },
      {
        accessorKey: 'lastName',
        header: 'Příjmení',
        size: 150
      }
    ],
    []
  );

  const [createModalOpen, setCreateModalOpen] = useState(false);
  const [tableData, setTableData] = useState(() => data);

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
        data={data}
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
