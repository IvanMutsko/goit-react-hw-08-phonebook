import { useDispatch } from 'react-redux';
import { setFilter } from 'redux/filter/filterSlice';
import css from './Filter.module.css';

const Filter = () => {
  const dispatch = useDispatch();

  const onChangeFilterInput = evt => {
    dispatch(setFilter(evt.target.value.toLowerCase().trim()));
  };

  return (
    <>
      <p className={css.text}>Find contacts by name</p>
      <input
        onInput={onChangeFilterInput}
        name="filter"
        className={css.input}
        placeholder="Start typing a name..."
      />
    </>
  );
};

export default Filter;
