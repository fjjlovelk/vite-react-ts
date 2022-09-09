import { createSlice } from '@reduxjs/toolkit';
import { AppState } from '@/interfaces/redux';

const initialState: AppState = {
  sideOpen: false
};

export const appSlice = createSlice({
  name: 'app',
  initialState,
  reducers: {
    toggleSideOpen: state => {
      state.sideOpen = !state.sideOpen;
    }
  }
});

export const { toggleSideOpen } = appSlice.actions;

export default appSlice.reducer;
