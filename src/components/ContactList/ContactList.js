import { useSelector, useDispatch } from 'react-redux';
import { deleteContact } from 'redux/contacts/operations';
import { selectContacts, selectFilterQuery } from 'redux/contacts/selectors';
import css from './ContactList.module.css';

export default function ContactList() {
  const contacts = useSelector(selectContacts);
  const filterQuery = useSelector(selectFilterQuery);
  const dispatch = useDispatch();

  const removeContact = e => {
    const contactId = e.target.id;
    dispatch(deleteContact(contactId));
  };

  const updateContact = e => {
    const contactId = e.target.id;
    dispatch(updateContact(contactId));
  };

  return contacts.length > 0 ? (
    <ul className={css.contactList}>
      {contacts
        .filter(contact =>
          contact.name.toLowerCase().includes(filterQuery.toLowerCase())
        )
        .map(({ id, name, number }) => {
          return (
            <li className={css.contactItem} key={id}>
              {name}: {number}
              <button
                className={css.listItemBtn}
                id={id}
                type="button"
                // onClick={}
              >
                Edit
              </button>
              <button
                className={css.listItemBtn}
                id={id}
                type="button"
                onClick={removeContact}
              >
                Delete
              </button>
             
            </li>
          );
        })}
    </ul>
  ) : (
    <p className={css.contactListDefault}>
      Sorry, your phonebook is empty. <br></br>
      Add your first contact, please.
    </p>
  );
}
