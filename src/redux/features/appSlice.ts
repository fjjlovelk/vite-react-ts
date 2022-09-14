import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { AppState } from '@/interfaces/redux';

const initialState: AppState = {
	// side收缩状态
	sideCollapse: false,
	// side是否显示
	sideShow: true
};

export const appSlice = createSlice({
	name: 'app',
	initialState,
	reducers: {
		// 切换side收缩状态
		toggleSideCollapse: (state, action: PayloadAction<boolean>) => {
			state.sideCollapse = action.payload;
		},
		// 切换side是否显示
		toggleSideShow: (state, action: PayloadAction<boolean>) => {
			state.sideShow = action.payload;
			state.sideCollapse = !action.payload;
			// toggleSideCollapse(!action.payload);
		}
	}
});

export const { toggleSideCollapse, toggleSideShow } = appSlice.actions;

export default appSlice.reducer;
