import { createSlice } from '@reduxjs/toolkit';

interface AppState {
  sideOpen: boolean;
}

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
