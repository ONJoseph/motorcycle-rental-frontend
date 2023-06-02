import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  data: {},
};

export const session = createApi({
  baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:3000/api/v1' }),
  endpoints: (builder) => ({
    signUp: builder.mutation({
      query: (formData) => ({
        url: '/signup',
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...formData
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
        } else {
          throw new Error('Failed to log in');
        }
      }, 
    }),
  }),
})

export const {
  useSignUpMutation,
  useLoginMutation
} = session

const sessionSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUserData(state, action) {
      state.data = action.payload;
    },
    clearError(state) {
      state.data = {
        ...state.data,
        message: '',
      };
    },
  },
});

export const { setUserData, clearError } = sessionSlice.actions;
export default sessionSlice.reducer;
