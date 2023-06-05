import { configureStore } from '@reduxjs/toolkit';
import sessionReducer, { session } from './sessionSlice';
import { vehicleSlice } from './vehicleSlice';

const store = configureStore({
  reducer: {
    session: sessionReducer,
    sessionFetch: session.reducer,
    vehicleFetch: vehicleSlice.reducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(session.middleware)
    .concat(vehicleSlice.middleware),
});
export default store;
