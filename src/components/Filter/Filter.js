import { useSelector, useDispatch } from 'react-redux';
import { Box, Stack, TextField, IconButton } from '@mui/material';
import AddSharpIcon from '@mui/icons-material/AddSharp';
import DeleteSharpIcon from '@mui/icons-material/DeleteSharp';
import EditNoteSharpIcon from '@mui/icons-material/EditNoteSharp';
import { selectedRows } from 'components/ContactList/ContactList';
import { filter } from 'redux/contacts/filterSlice';
import { selectFilterQuery } from 'redux/contacts/selectors';
import { deleteContact } from 'redux/contacts/operations';
import css from './Filter.module.css';

export default function Filter() {
  const filterQuery = useSelector(selectFilterQuery);
  const dispatch = useDispatch();

  const handleFilterChange = e => {
    const { value } = e.target;
    dispatch(filter(value));
  };

  const removeContact = () => {    
    dispatch(deleteContact([...selectedRows]));
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
      <Stack sx={{flexDirection:'row', alignItems: 'center'}}>
        <IconButton variant="outlined" fontSize="large" onClick={removeContact}>
          <DeleteSharpIcon fontSize="large" />
        </IconButton>
        <IconButton variant="outlined" fontSize="large">
          <EditNoteSharpIcon fontSize="large" />
        </IconButton>
        <IconButton variant="outlined" fontSize="large" >
          <AddSharpIcon fontSize="large" />
        </IconButton>
      </Stack>
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
