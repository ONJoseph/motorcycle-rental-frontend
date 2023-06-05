import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const vehicleSlice = createApi({
  reducerPath: 'vehicle',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:3000/api/v1' }),
  endpoints: (builder) => ({
    getVehicles: builder.query({
      query: () => '/vehicles',
    }),
  }),
});

export const { useGetVehiclesQuery } = vehicleSlice;
