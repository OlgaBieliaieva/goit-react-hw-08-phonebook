import { useSelector, useDispatch } from 'react-redux';
import { filter } from 'redux/contacts/filterSlice';
import { selectFilterQuery } from 'redux/contacts/selectors';
import css from './Filter.module.css';

export default function Filter() {
  const filterQuery = useSelector(selectFilterQuery);
  const dispatch = useDispatch();

  const handleFilterChange = e => {
    const { value } = e.target;
    dispatch(filter(value));
  };

  return (
    <label className={css.formLabel}>
      Find contacts by name
      <input
        className={css.formInput}
        type="text"
        name="filter"
        value={filterQuery}
        onChange={handleFilterChange}
        placeholder="type your query here..."
        autoComplete="off"
      />
    </label>
  );
}
