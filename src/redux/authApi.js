import { createSlice } from '@reduxjs/toolkit';
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const authApi = createApi({
  reducerPath: 'authentication',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://connections-api.herokuapp.com',
  }),
  tagTypes: ['Authentication'],
  endpoints: builder => ({
    registerUser: builder.mutation({
      query: userData => ({
        url: `/users/signup`,
        method: 'POST',
        body: userData,
      }),
      invalidatesTags: ['Authentication'],
    }),
    // logInUser: builder.mutation({}),
    // logOutUser: builder.mutation({}),
  }),
});

export const { useRegisterUserMutation } = authApi;
