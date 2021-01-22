import { combineReducers, createReducer } from '@reduxjs/toolkit';
import { changeFilter } from './actions';
import { fetchContacts, addContact, deleteContact } from './operations';

const contacts = createReducer([], {
  [fetchContacts.fulfilled]: (_, { payload }) => payload,
  [addContact.fulfilled]: (state, { payload }) => [...state, payload],
  [deleteContact.fulfilled]: (state, { payload }) =>
    state.filter(contact => contact.id !== payload),
});

const filter = createReducer('', {
  [changeFilter]: (_, { payload }) => payload,
});

const rootReducer = combineReducers({
  contacts,
  filter,
});

export default rootReducer;
