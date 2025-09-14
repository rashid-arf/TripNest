'use client';

import { createSlice } from '@reduxjs/toolkit';
import { TourItem } from './tourItemTypes';
import { fetchTour } from '@/GlobalRedux/features/tour/action';


export interface TourState {
  tours: TourItem[];
}

const initialState: TourState = {
  tours: [],
};

export const tourSlice = createSlice({
  name: 'tour',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchTour.fulfilled, (state, action) => {
      if (action.payload !== null) {
        state.tours = action.payload;
      }
    });
  },
});

export default tourSlice.reducer;