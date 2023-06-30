import { configureStore } from '@reduxjs/toolkit';
import phonebook from './slices/phonebookSlice';
import { combineReducers } from 'redux';

const reducers = combineReducers({
  phonebook,
});
export const store = configureStore({
  reducer: reducers,
});
