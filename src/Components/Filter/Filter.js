import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import styles from './Filter.module.css';
import { operations, selectors } from 'redux/contacts';

function Filter() {
  const filter = useSelector(selectors.getFilter);

  const dispatch = useDispatch();

  return (
    <form className={styles.form}>
      <label>
        <span className={styles.title}>Find contacts by name</span>
        <input
          className={styles.searchField}
          type="text"
          value={filter}
          onChange={e => dispatch(operations.changeFilter(e.target.value))}
        />
      </label>
    </form>
  );
}

export default Filter;
