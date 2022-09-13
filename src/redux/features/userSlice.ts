import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { UserState } from '@/interfaces/redux';

const initialState: UserState = {
	token: ''
};

export const userSlice = createSlice({
	name: 'user',
	initialState,
	reducers: {
		setToken: (state, action: PayloadAction<string>) => {
			state.token = action.payload;
		}
	}
});

export const { setToken } = userSlice.actions;

export default userSlice.reducer;
