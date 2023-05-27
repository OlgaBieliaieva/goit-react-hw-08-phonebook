import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
//REDUX
import { selectContacts, selectFilterQuery } from 'redux/contacts/selectors';
//MUI
import { DataGrid } from '@mui/x-data-grid';


const columns = [
  // { field: 'avatar', headerName: ' AV', sortable: false },
  { field: 'name', headerName: 'Name', width: 170 },
  { field: 'number', headerName: 'Phone', sortable: false, width: 170 },
  // { field: 'description', headerName: 'Description', sortable: false },
];

export let selectedRows = [];

export const ContactTable = () => {
  const [rowSelectionModel, setRowSelectionModel] = useState([]);
  const contacts = useSelector(selectContacts);
  const filterQuery = useSelector(selectFilterQuery);
  const filteredContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(filterQuery.toLowerCase())
  );

  useEffect(() => {
    if (!rowSelectionModel) {
      return;
    }
    selectedRows = [...rowSelectionModel];
  }, [rowSelectionModel]);

  return (
    <div style={{ width: '100%' }}>
      <DataGrid
        checkboxSelection
        onRowSelectionModelChange={newRowSelectionModel => {
          setRowSelectionModel(newRowSelectionModel);
        }}
        rowSelectionModel={rowSelectionModel}
        rows={filteredContacts}
        columns={columns}
        initialState={{
          pagination: {
            paginationModel: { page: 0, pageSize: 5 },
          },
        }}
        pageSizeOptions={[5, 10]}
        sx={{ [`& .MuiDataGrid-virtualScroller`]: { minHeight: '52px' } }}
      />
    </div>
  );
};
