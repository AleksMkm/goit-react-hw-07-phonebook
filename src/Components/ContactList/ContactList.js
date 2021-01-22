import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Contact from './Contact';
import styles from './ContactList.module.css';
import {
  getContacts,
  getFilter,
  getFilteredContacts,
} from '../../redux/selectors';
import { deleteContact } from '../../redux/operations';

function ContactList() {
  const contacts = useSelector(getContacts);
  const filter = useSelector(getFilter);

  const filteredContacts = useSelector(getFilteredContacts);
  const dispatch = useDispatch();

  const displayedContacts = filter.trim() ? filteredContacts : contacts;

  return (
    <ul className={styles.contactList}>
      {displayedContacts.map(contact =>
        Contact({
          id: contact.id,
          name: contact.name,
          phone: contact.number,
          deleteHandler: () => dispatch(deleteContact(contact.id)),
        }),
      )}
    </ul>
  );
}

export default ContactList;
