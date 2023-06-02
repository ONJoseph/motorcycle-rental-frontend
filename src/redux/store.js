import { configureStore } from '@reduxjs/toolkit';
import sessionReducer, { session } from './sessionSlice';

const store = configureStore({
  reducer: {
    session: sessionReducer,
    sessionFetch: session.reducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(session.middleware),
});
export default store;
