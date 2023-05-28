import { configureStore } from '@reduxjs/toolkit';
import filterReducer from './filterSlice';
import { contactsApi } from './contactsApi';
import { authApi } from './authApi';
// import { authReducer } from './authSlice';

export const store = configureStore({
  reducer: {
    // authApi: authApi.reducer,
    [authApi.reducerPath]: authApi.reducer,
    // auth: authReducer,
    [contactsApi.reducerPath]: contactsApi.reducer,
    filter: filterReducer,
  },

  middleware: getDefaultMiddleware =>
    getDefaultMiddleware()
      .concat(contactsApi.middleware)
      .concat(authApi.middleware),
});
