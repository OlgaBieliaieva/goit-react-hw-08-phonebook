import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
//REDUX
import { deleteContact } from 'redux/contacts/operations';
import { selectContacts } from 'redux/contacts/selectors';
//MUI
import { Stack, IconButton, Box, Modal, Tooltip } from '@mui/material';
import AddSharpIcon from '@mui/icons-material/AddSharp';
import DeleteSharpIcon from '@mui/icons-material/DeleteSharp';
import EditNoteSharpIcon from '@mui/icons-material/EditNoteSharp';
//NOTIFY
import { Notify } from 'notiflix/build/notiflix-notify-aio';
//COMPONENTS
import { selectedRows } from 'components/ContactTable/ContactTable';
import { ContactForm } from 'components/ContactForm/ContactForm';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

export const ToolMenu = () => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const [open, setOpen] = useState(false);

  const contacts = useSelector(selectContacts);
  const dispatch = useDispatch();

  const handleChange = e => {
    const { name, value } = e.target;
    switch (name) {
      case 'name':
        setName(value);
        break;

      case 'phone':
        setNumber(value);
        break;

      default:
        return;
    }
  };

  const reset = () => {
    setName('');
    setNumber('');
  };

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const removeContact = () => {
    if (selectedRows.length <= 0) {
      return Notify.warning('Choose something please');
    }
    selectedRows.map(row => dispatch(deleteContact(row)));
  };

  const handleEdit = () => {
    if (selectedRows.length !== 1) {
      return Notify.warning('Choose something please');
    }

    contacts.map(contact => {
      if (contact.id === selectedRows[0]) {
        setName(contact.name);
        setNumber(contact.number);
        return null;
      }
      return null;
    });

    handleOpen();
  };

  return (
    <>
      <Stack sx={{ flexDirection: 'row', alignItems: 'center' }}>
        <Tooltip title="Delete" arrow>
          <IconButton
            variant="outlined"
            fontSize="large"
            onClick={removeContact}
          >
            <DeleteSharpIcon fontSize="large" />
          </IconButton>
        </Tooltip>
        <Tooltip title="Edit" arrow>
          <IconButton variant="outlined" fontSize="large" onClick={handleEdit}>
            <EditNoteSharpIcon fontSize="large" />
          </IconButton>
        </Tooltip>
        <Tooltip title="Add" arrow>
          <IconButton variant="outlined" fontSize="large" onClick={handleOpen}>
            <AddSharpIcon fontSize="large" />
          </IconButton>
        </Tooltip>
      </Stack>

      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <ContactForm
            name={name}
            number={number}
            handleInputChange={handleChange}
            formReset={reset}
            onClose={handleClose}
          />
        </Box>
      </Modal>
    </>
  );
};
