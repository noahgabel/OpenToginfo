import { configureStore } from '@reduxjs/toolkit';
import departureReducer from './departure-reducer';

export const store = configureStore({
  reducer: {
    auth: departureReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
