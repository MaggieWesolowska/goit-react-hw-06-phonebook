import { useState, useEffect } from 'react';
import { nanoid } from 'nanoid';
import { ContactForm } from './ContactForm/ContactForm';
import { Filter } from './Filter/Filter';
import { ContactList } from './ContactList/ContactList';
import css from './ContactForm/ContactForm.module.css';
import { addContact } from '../slices/phonebookSlice';
import { useDispatch, useSelector } from 'react-redux';

export const App = () => {
  const dispatch = useDispatch();
  const { contacts, filter } = useSelector(
    state => state.phonebook
  );

  const setContacts = () => {};
  const setFilter = () => {};

  useEffect(() => {
    const lsData = localStorage.getItem('contactList');
    if (lsData) {
      setContacts(JSON.parse(lsData));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem(
      'contactList',
      JSON.stringify(contacts)
    );
  }, [contacts]);

  const handleChange = e => {
    const { value } = e.target;
    setFilter(value);
  };

  const handleSubmit = e => {
    const name = e.name;
    const number = e.number;
    dispatch(
      addContact({
        name,
        number,
      })
    );
  };

  const handleDelete = e => {
    setContacts(
      contacts.filter(contact => contact.id !== e)
    );
  };

  const getFilteredContacts = () => {
    const filteredContactList = contacts.filter(contact => {
      return contact.name
        .toLowerCase()
        .includes(filter.toLowerCase());
    });
    return filteredContactList;
  };

  return (
    <div
      style={{
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        color: '#333',
        background: '#D9DDDc',
        margin: 20,
        borderRadius: 10,
        paddingBottom: 30,
      }}>
      <h1 className={css.header}>Phonebook</h1>
      <ContactForm handleSubmit={handleSubmit} />
      <h2 className={css.contacts}>Contacts</h2>
      <Filter filter={filter} handleChange={handleChange} />
      <ContactList
        contacts={getFilteredContacts()}
        handleDelete={handleDelete}
      />
    </div>
  );
};

export default App;
