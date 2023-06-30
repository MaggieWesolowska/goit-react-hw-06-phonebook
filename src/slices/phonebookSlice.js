import { createSlice } from '@reduxjs/toolkit';
import { nanoid } from 'nanoid';

const slice = createSlice({
  name: 'phonebook',
  initialState: {
    contacts: [
      {
        id: 'id-1',
        name: 'Rosie Simpson',
        number: '459-12-56',
      },
      {
        id: 'id-2',
        name: 'Hermione Kline',
        number: '443-89-12',
      },
      {
        id: 'id-3',
        name: 'Eden Clements',
        number: '645-17-79',
      },
      {
        id: 'id-4',
        name: 'Annie Copeland',
        number: '227-91-26',
      },
    ],
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
  },
});

export default slice.reducer;
export const { addContact } = slice.actions;
