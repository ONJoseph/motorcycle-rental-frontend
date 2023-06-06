import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const apiSlice = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:3000/api/v1' }),
  tagTypes: ['Vehicle', 'Session'],
  endpoints: (builder) => ({}), // eslint-disable-line no-unused-vars
});

export default apiSlice;
