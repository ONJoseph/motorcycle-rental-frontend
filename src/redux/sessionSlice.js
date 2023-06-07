// import { createEntityAdapter } from '@reduxjs/toolkit';
import apiSlice from './api/apiSlice';

// const sessionAdapter = createEntityAdapter();

// const initialState = sessionAdapter.getInitialState();

export const sessionApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    signUp: builder.mutation({
      query: (formData) => ({
        url: '/signup',
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...formData,
        }),
      }),
    }),
    login: builder.mutation({
      query: (formData) => ({
        url: '/login',
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...formData,
        }),
      }),
      responseHandler: (response) => {
        if (response.ok) {
          return response.json();
        }
        throw new Error('Failed to log in');
      },
    }),
  }),
});

export const {
  useSignUpMutation,
  useLoginMutation,
} = sessionApiSlice;
