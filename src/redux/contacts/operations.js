import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import toast from 'react-hot-toast';

axios.defaults.baseURL = 'https://connections-api.herokuapp.com/';

export const fetchContacts = createAsyncThunk(
  'contacts/fetchContacts',
  async (_, thunkAPI) => {
    try {
      const res = await axios.get('/contacts');
      toast.success('Contact loaded!', { position: 'top-center' });
      return res.data;
    } catch (error) {
      toast.error('An error occurred!', { position: 'top-center' });
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const addContact = createAsyncThunk(
  'contacts/addContact',
  async (newContact, thunkAPI) => {
    try {
      const response = await axios.post('/contacts', newContact);
      toast.success('Contact added!', { position: 'top-center' });
      return response.data;
    } catch (error) {
      toast.error('An error occurred!', { position: 'top-center' });
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const deleteContact = createAsyncThunk(
  'contacts/deleteContact',
  async (id, thunkAPI) => {
    try {
      const response = await axios.delete(`/contacts/${id}`);
      toast.success('Contact deleted!', { position: 'top-center' });
      return response.data;
    } catch (error) {
      toast.error('An error occurred!', { position: 'top-center' });
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const updateContact = createAsyncThunk(
  'contacts/redactContact',
  async (data, { rejectWithValue }) => {
    try {
      const response = await axios.patch(`/contacts/${data.id}`, {
        name: data.name,
        number: data.number,
      });
      toast.success('Contact updated!', { position: 'top-center' });
      return response.data;
    } catch (error) {
      toast.error('An error occurred!', { position: 'top-center' });
      return rejectWithValue(error.message);
    }
  }
);
