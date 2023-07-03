import { createSlice } from '@reduxjs/toolkit';
import { nanoid } from 'nanoid';
import { loadLocalStorage } from '../../utils/loadLocalStorage';

const slice = createSlice({
  name: 'phonebook',
  initialState: {
    contacts: loadLocalStorage(),
    filter: '',
  },
  reducers: {
    addContact: (state, action) => {
      const id = nanoid();
      const name = action.payload.name;
      const number = action.payload.number;
      const contactList = [...state.contacts];

      if (
        contactList.findIndex(
          contact => name === contact.name
        ) !== -1
      ) {
        alert(`${name} is already in contacts.`);
      } else {
        contactList.push({ name, id, number });
      }
      state.contacts = contactList;
    },
    deleteContact: (state, action) => {
      const { id } = action.payload;
      state.contacts = state.contacts.filter(
        contact => contact.id !== id
      );
    },
  },
});

export default slice.reducer;
export const { addContact, deleteContact } = slice.actions;
