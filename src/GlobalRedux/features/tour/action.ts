import { createAsyncThunk } from '@reduxjs/toolkit';
import { types } from './types';
import { TourItem } from './tourItemTypes';

export const fetchTour = createAsyncThunk<TourItem[] | null>(types.TOUR_FETCH, async () => {
  try {
    const response = await fetch('/tour-config.json');
    return await response.json();
  } catch (err) {
    console.error(types.TOUR_FETCH, err);
    return null;
  }
});