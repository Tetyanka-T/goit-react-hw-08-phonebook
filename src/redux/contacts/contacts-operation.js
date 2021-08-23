import { createAsyncThunk } from '@reduxjs/toolkit';
import { ContactsAPI } from 'services/contactApi';

export const fetchContactsList = createAsyncThunk(
  'contacts/getContacts',
  async (_, { rejectWithValue }) => {
    try {
      const contacts = await ContactsAPI.fetchContactsList();

      return contacts;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  },
);

export const createContact = createAsyncThunk(
  'contacts/createContact',
  async (contact, { rejectWithValue }) => {
    try {
      const data = await ContactsAPI.createContact(contact);

      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  },
);

export const deleteContact = createAsyncThunk(
  'contacts/deleteContact',
  async (id, { rejectWithValue }) => {
    try {
      await ContactsAPI.deleteContact(id);

      return id;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  },
);

export const patchContact = createAsyncThunk(
  'contacts/patchContact',
  async (id, { rejectWithValue }) => {
    try {
      const data = await ContactsAPI.patchContact(id);

      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  },
);
