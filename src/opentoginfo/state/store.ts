import { configureStore } from '@reduxjs/toolkit';
import departureReducer from './departure-reducer';

export const store = configureStore({
  reducer: {
    auth: departureReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      immutableCheck: { warnAfter: 256 },
      serializableCheck: { warnAfter: 256 },
    }),
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
