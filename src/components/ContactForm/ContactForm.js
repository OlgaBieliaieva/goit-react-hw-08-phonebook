import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
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
import { addContact } from 'redux/contacts/operations';
import { selectContacts } from 'redux/contacts/selectors';
// import css from './ContactForm.module.css';

const defaultTheme = createTheme();

export default function ContactForm({onClose}) {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

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

  const handleSubmit = e => {
    e.preventDefault(e);
    createContact(name, number);
    reset();
  };

  const createContact = (name, number) => {
    const newContact = {
      name: name,
      number: number,
    };
    const contactNames = [];
    contacts.map(contact => contactNames.push(contact.name));

    if (contactNames.includes(name)) {
      return alert(`${name} is already in contacts`);
    }
    dispatch(addContact(newContact));
  };

  const reset = () => {
    setName('');
    setNumber('');
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
          <IconButton fontSize="large" sx={{position: 'absolute', top: '8px', right: '8px'}} onClick={onClose}>
            <HighlightOffSharpIcon fontSize="large" />
          </IconButton>
          <Typography component="h1" variant="h5">
            Add contact
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
              onChange={handleChange}
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
              onChange={handleChange}
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
    // <form
    //   className={css.contactForm}
    //   onSubmit={handleSubmit}
    //   name={name}
    //   number={number}
    // >
    //   <label className={css.formLabel}>
    //     Name
    //     <input
    //       className={css.formInput}
    //       type="text"
    //       name="name"
    //       value={name}
    //       onChange={handleChange}
    //       placeholder="type name here..."
    //       pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
    //       title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
    //       required
    //       autoComplete="off"
    //     />
    //   </label>
    //   <label className={css.formLabel}>
    //     Number
    //     <input
    //       className={css.formInput}
    //       type="tel"
    //       name="phone"
    //       value={number}
    //       onChange={handleChange}
    //       placeholder="type number here..."
    //       pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
    //       title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
    //       required
    //       autoComplete="off"
    //     />
    //   </label>
    //   <button className={css.formBtn} type="submit">
    //     Add contact
    //   </button>
    // </form>
  );
}
