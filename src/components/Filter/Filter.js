import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  Box,
  Stack,
  TextField,
  IconButton,
  Modal,
  // CircularProgress,
} from '@mui/material';
import AddSharpIcon from '@mui/icons-material/AddSharp';
import DeleteSharpIcon from '@mui/icons-material/DeleteSharp';
import EditNoteSharpIcon from '@mui/icons-material/EditNoteSharp';
import { selectedRows } from 'components/ContactList/ContactList';
import { filter } from 'redux/contacts/filterSlice';
import { selectFilterQuery } from 'redux/contacts/selectors';
import { deleteContact } from 'redux/contacts/operations';
import ContactForm from '../ContactForm/ContactForm';
// import css from './Filter.module.css';

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

export default function Filter() {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const filterQuery = useSelector(selectFilterQuery);
  const dispatch = useDispatch();

  const handleFilterChange = e => {
    const { value } = e.target;
    dispatch(filter(value));
  };

  const removeContact = () => {
    if (selectedRows.length <= 0) {
      return;
    }
    selectedRows.map(row => dispatch(deleteContact(row)));
  };

  return (
    <Box sx={{ display: 'flex', gap: '8px', alignItems: 'center' }}>
      <TextField
        margin="normal"
        required
        fullWidth
        type="text"
        name="filter"
        id="filter"
        label="Filter"
        placeholder="type your query here..."
        value={filterQuery}
        onChange={handleFilterChange}
        sx={{
          maxWidth: '360px',
        }}
        //
        // autoComplete="email"
        // autoFocus
      />
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
    </Box>

    // <label className={css.formLabel}>
    //   Find contacts by name
    //   <input
    //     className={css.formInput}
    //     type="text"
    //     name="filter"
    //     value={filterQuery}
    //     onChange={handleFilterChange}
    //     placeholder="type your query here..."
    //     autoComplete="off"
    //   />
    // </label>
  );
}
