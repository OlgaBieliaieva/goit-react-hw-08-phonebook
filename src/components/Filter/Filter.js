import { useSelector, useDispatch } from 'react-redux';
//MUI
import { TextField } from '@mui/material';
//REDUX
import { filter } from 'redux/contacts/filterSlice';
import { selectFilterQuery } from 'redux/contacts/selectors';

export const Filter =()=> {
  const filterQuery = useSelector(selectFilterQuery);
  const dispatch = useDispatch();

  const handleFilterChange = e => {
    const { value } = e.target;
    dispatch(filter(value));
  };

  return (
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
    />
  );
}
