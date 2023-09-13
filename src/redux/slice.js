import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { axiosRequestDelete, axiosRequestGet, axiosRequestPost } from 'components/server/api';

export const fetchContacts = createAsyncThunk(
  'fetchContacts',
  async (_, { rejectWithValue }) => {
    try {
      const respons = await axiosRequestGet();
      if (!respons) {
        throw new Error('No found');
      }
     return respons
    
    } catch (error) {
      rejectWithValue(error.message)
    
    }
  }
);
export const addContactToList = createAsyncThunk(
  'addContactToList',
  async (contact, { rejectWithValue }) => {
    try {
      const respons = await axiosRequestPost(contact);
      if (!respons) {
        throw new Error('No found');
      }
      return respons;
    } catch (error) {
      rejectWithValue(error.message);
    }
  }
);
export const deleteContactFromList = createAsyncThunk(
  'deleteContactFromList',
  async (id, { rejectWithValue }) => {
    try {
      const respons = await axiosRequestDelete(id);
      if (!respons) {
        throw new Error('No found');
      }
      return respons;
    } catch (error) {
      rejectWithValue(error.message);
    }
  }
);

 const contactsListSlice = createSlice({
  name: 'contactslist',
  initialState: {
    error: null,
    contacts: [],
    isLoading:false
  },
  extraReducers: builder => {
    builder.addCase(fetchContacts.pending, (state) => {
    state.isLoading = true
      state.error = null;
    });
    builder.addCase(fetchContacts.fulfilled, (state, action) => {
    state.isLoading = false;
      state.contacts = action.payload;
      state.error = null;
    });
    builder.addCase(fetchContacts.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    });
     builder.addCase(addContactToList.fulfilled, (state, action) => {
       state.isLoading = false;
       state.contacts = [action.payload, ...state.contacts];
       state.error = null;
     });
     builder.addCase(deleteContactFromList.fulfilled, (state, action) => {
       state.isLoading = false;
       state.contacts = state.contacts.filter(contact => contact.id !== action.payload.id)
       state.error = null;
     });
  },
});

export const contactsReducer = contactsListSlice.reducer;
