import React, { createRef, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Container from './Components/Container';
import ContactList from './Components/ContactList';
import ContactForm from './Components/ContactForm';
import Section from './Components/Section';
import Filter from './Components/Filter';
import { getContacts } from './redux/selectors';
import { fetchContacts } from './redux/operations';

function App() {
  const contacts = useSelector(getContacts);
  const dispatch = useDispatch();
  const isFirstRender = createRef(true);

  console.log(dispatch);

  useEffect(() => {
    if (isFirstRender) {
      dispatch(fetchContacts());
    }
  });

  return (
    <Container>
      <Section title="Phonebook">
        <ContactForm />
      </Section>
      <Section title="Contacts">
        {contacts.length ? (
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
