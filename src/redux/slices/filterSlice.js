import { createSlice } from '@reduxjs/toolkit';
import { loadLocalStorage } from '../../utils/loadLocalStorage';

const slice = createSlice({
  name: 'filterSlice',
  initialState: {
    contacts: loadLocalStorage(),
    filter: '',
  },
  reducers: {
    setFilter: (state, action) => {
      const { filter } = action.payload;
      state.filter = filter;
    },
  },
});

export default slice.reducer;
export const { setFilter } = slice.actions;
