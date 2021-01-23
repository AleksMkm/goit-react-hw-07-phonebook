import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Container from 'Components/Container';
import ContactList from 'Components/ContactList';
import ContactForm from 'Components/ContactForm';
import Section from 'Components/Section';
import Filter from 'Components/Filter';
import { operations, selectors } from 'redux/contacts';
import Loader from 'Components/Loader';

function App() {
  const contacts = useSelector(selectors.getContacts);
  const isLoading = useSelector(selectors.getLoadingData);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(operations.fetchContacts());
    //eslint-disable-next-line
  }, []);

  return (
    <Container>
      <Section title="Phonebook">
        <ContactForm />
      </Section>
      <Section title="Contacts">
        {isLoading ? (
          <Loader />
        ) : contacts.length ? (
          <>
            <Filter />
            <ContactList />
          </>
        ) : (
          <div>Oops. no contacts here! Let's add some data!</div>
        )}
      </Section>
    </Container>
  );
}

export default App;
