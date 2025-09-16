'use client';

import { configureStore } from '@reduxjs/toolkit';
import tourReducer from './features/tour/tourSlice';

export const store = configureStore({
  reducer: {
    tour: tourReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
