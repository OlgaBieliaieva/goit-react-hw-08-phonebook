import { useState} from 'react';
import { useDispatch } from 'react-redux';
//REDUX
import { deleteContact } from 'redux/contacts/operations';
//MUI
import { Stack, IconButton, Box, Modal } from '@mui/material';
import AddSharpIcon from '@mui/icons-material/AddSharp';
import DeleteSharpIcon from '@mui/icons-material/DeleteSharp';
import EditNoteSharpIcon from '@mui/icons-material/EditNoteSharp';
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

export const ToolMenu=()=> {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const dispatch = useDispatch();

  const removeContact = () => {
    if (selectedRows.length <= 0) {
      return;
    }
    selectedRows.map(row => dispatch(deleteContact(row)));
  };

  return (
    <>
      <Stack sx={{ flexDirection: 'row', alignItems: 'center' }}>
        <IconButton variant="outlined" fontSize="large" onClick={removeContact}>
          <DeleteSharpIcon fontSize="large" />
        </IconButton>
        <IconButton variant="outlined" fontSize="large">
          <EditNoteSharpIcon fontSize="large" />
        </IconButton>
        <IconButton variant="outlined" fontSize="large" onClick={handleOpen}>
          <AddSharpIcon fontSize="large" />
        </IconButton>
      </Stack>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <ContactForm onClose={handleClose} />
        </Box>
      </Modal>
    </>
  );
}
