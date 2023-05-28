import { useSelector, useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
//REDUX
import { addContact, updateContact } from 'redux/contacts/operations';
import { selectContacts } from 'redux/contacts/selectors';
//MUI
import {
  Button,
  IconButton,
  CssBaseline,
  TextField,
  Box,
  Grid,
  Typography,
  createTheme,
  ThemeProvider,
} from '@mui/material';
import HighlightOffSharpIcon from '@mui/icons-material/HighlightOffSharp';
//COMPONENTS
import { selectedRows } from 'components/ContactTable/ContactTable';

const defaultTheme = createTheme();

export const ContactForm = ({
  name,
  number,
  handleInputChange,
  formReset,
  onClose,
}) => {
  const contacts = useSelector(selectContacts);
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault(e);
    if (selectedRows.length !== 0) {
      editContact(selectedRows[0], name, number);
    } else {
      createContact(name, number);
    }
    formReset();
  };

  const editContact = (id, newName, newNumber) => {
    const newContact = {
      id: id,
      name: newName,
      number: newNumber,
    };
    const userConfirm = window.confirm(`Do you want to save changes?`);
    if (userConfirm) {
      onClose();
      dispatch(updateContact(newContact));
    }
    onClose();
  };

  const createContact = (newName, newNumber) => {
    const newContact = {
      name: newName,
      number: newNumber,
    };
    const checkedContacts = contacts.map(({ id, name, number }) => {
      if (name === newName) {
        const userConfirm = window.confirm(
          `"${name}" is already exist. Do you want to update contact?`
        );
        if (userConfirm) {
          editContact(id, newName, newNumber);
          return null;
        }
        onClose();
        return null;
      }
      if (number === newNumber) {
        const userConfirm = window.confirm(
          `This number "${number}" is already exist. Do you want to update contact?`
        );
        if (userConfirm) {
          editContact(id, newName, newNumber);
          return null;
        }
        onClose();
        return null;
      }
      return id;
    });
    if (checkedContacts.includes(null)) {
      return;
    }
    onClose();
    dispatch(addContact(newContact));
  };

  return (
    <ThemeProvider theme={defaultTheme}>
      <Grid container sx={{ height: '70vh' }}>
        <CssBaseline />
        <Box
          sx={{
            my: 8,
            mx: 4,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <IconButton
            fontSize="large"
            sx={{ position: 'absolute', top: '8px', right: '8px' }}
            onClick={onClose}
          >
            <HighlightOffSharpIcon fontSize="large" />
          </IconButton>
          <Typography component="h1" variant="h5">
            Contact
          </Typography>
          <Box
            component="form"
            // noValidate
            onSubmit={handleSubmit}
            sx={{ mt: 1 }}
          >
            <TextField
              margin="normal"
              required
              fullWidth
              type="text"
              name="name"
              id="name"
              label="Name"
              value={name}
              onChange={handleInputChange}
              placeholder="type name here..."
              pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
              title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
              // autoComplete="email"
              autoFocus
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="phone"
              label="Phone"
              type="tel"
              id="phone"
              value={number}
              onChange={handleInputChange}
              placeholder="type number here..."
              pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
              title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
              // autoComplete="current-password"
            />

            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Save
            </Button>
          </Box>
        </Box>
      </Grid>
    </ThemeProvider>
  );
};

ContactForm.propTypes ={
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  handleInputChange: PropTypes.func.isRequired,
  formReset: PropTypes.func.isRequired,
  onClose: PropTypes.func.isRequired,
}
