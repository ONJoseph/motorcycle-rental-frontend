// import { createEntityAdapter } from '@reduxjs/toolkit';
import apiSlice from './api/apiSlice';

// const vehicleAdapter = createEntityAdapter();

// const initialState = vehicleAdapter.getInitialState();

export const vehicleApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getVehicles: builder.query({
      query: () => '/vehicles',
    }),
    getVehicleById: builder.query({
      query: (id) => `/vehicles/${id}`,
    }),
    createVehicle: builder.mutation({
      query: (formData) => ({
        url: '/vehicles',
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          vehicle: {
            ...formData,
          },
        }),
      }),
      responseHandler: (response) => {
        if (response.ok) {
          return response.json();
        }
        throw new Error('Failed to create');
      },
    }),
  }),
});

export const {
  useGetVehiclesQuery,
  useGetVehicleByIdQuery,
  useCreateVehicleMutation,
} = vehicleApiSlice;
