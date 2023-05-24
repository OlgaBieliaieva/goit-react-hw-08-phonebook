import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { DataGrid } from '@mui/x-data-grid';
// import { deleteContact } from 'redux/contacts/operations';
import { selectContacts, selectFilterQuery } from 'redux/contacts/selectors';
import css from './ContactList.module.css';


const columns = [
  { field: 'avatar', headerName: ' AV', sortable: false },
  { field: 'name', headerName: 'Name' },
  { field: 'number', headerName: 'Phone', sortable: false },
  { field: 'description', headerName: 'Description', sortable: false },
];

export let selectedRows = [];

export default function ContactList() {
  const contacts = useSelector(selectContacts);
  const filterQuery = useSelector(selectFilterQuery);
  // const dispatch = useDispatch();
  const filteredContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(filterQuery.toLowerCase())
  );

  const [rowSelectionModel, setRowSelectionModel] = useState([]);
useEffect(()=>{
  if(!rowSelectionModel){
   return 
  }
  selectedRows = [...rowSelectionModel]
}, [rowSelectionModel])

  // const removeContact = e => {
  //   const contactId = e.target.id;
  //   dispatch(deleteContact(contactId));
  // };

  // const updateContact = e => {
  //   const contactId = e.target.id;
  //   dispatch(updateContact(contactId));
  // };
console.log(filteredContacts);

  return contacts.length > 0 ? (
    <div style={{ width: '100%' }}>
      <DataGrid
      checkboxSelection
      onRowSelectionModelChange={(newRowSelectionModel) => {
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
      />
    </div>
  ) : (
    // <ul className={css.contactList}>
    //   {contacts
    //     .filter(contact =>
    //       contact.name.toLowerCase().includes(filterQuery.toLowerCase())
    //     )
    //     .map(({ id, name, number }) => {
    //       return (
    //         <li className={css.contactItem} key={id}>
    //           {name}: {number}
    //           <button
    //             className={css.listItemBtn}
    //             id={id}
    //             type="button"
    //             // onClick={}
    //           >
    //             Edit
    //           </button>
    //           <button
    //             className={css.listItemBtn}
    //             id={id}
    //             type="button"
    //             onClick={removeContact}
    //           >
    //             Delete
    //           </button>

    //         </li>
    //       );
    //     })}
    // </ul>
    <p className={css.contactListDefault}>
      Sorry, your phonebook is empty. <br></br>
      Add your first contact, please.
    </p>
  );
}

