import { createSlice } from '@reduxjs/toolkit';
import {
  fetchContactsList,
  createContact,
  deleteContact,
} from './contacts-operation';

const contactSlice = createSlice({
  name: 'contacts',

  initialState: {
    items: [],
    filter: '',
    isLoading: false,
    error: null,
  },
  reducers: {
    changeFilter: (state, action) => {
      state.filter = action.payload;
    },
  },
  extraReducers: {
    [fetchContactsList.fulfilled]: (state, action) => {
      state.items = action.payload;
      state.isLoading = false;
      state.error = null;
    },
    [fetchContactsList.pending]: (state, action) => {
      state.isLoading = true;
    },
    [fetchContactsList.rejected]: (state, action) => {
      state.isLoading = false;
      state.error = 'Error';
    },

    [createContact.fulfilled]: (state, action) => {
      state.items = [...state.items, action.payload];
      state.isLoading = false;
      state.error = null;
    },
    [createContact.pending]: (state, action) => {
      state.isLoading = true;
      state.error = null;
    },
    [createContact.rejected]: (state, action) => {
      state.isLoading = false;
      state.error = 'Error';
    },
    [deleteContact.fulfilled]: (state, action) => {
      state.items = state.items.filter(
        contact => contact.id !== action.payload,
      );
    },
  },
});
export const { changeFilter } = contactSlice.actions;
export default contactSlice.reducer;
