// import { createEntityAdapter } from '@reduxjs/toolkit';
import apiSlice from './api/apiSlice';

// const vehicleAdapter = createEntityAdapter();

// const initialState = vehicleAdapter.getInitialState();

export const vehicleApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getVehicles: builder.query({
      query: () => '/vehicles',
    }),
  }),
});

export const { useGetVehiclesQuery } = vehicleApiSlice;
