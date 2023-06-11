import { createSlice } from "@reduxjs/toolkit";

export const paginationSlice = createSlice({
	name: "pagination",
	initialState: {
		page: 1,
	},
	reducers: {
		incrementPage: (state) => {
			state.page += 1;
		},
		decrementPage: (state) => {
			state.page -= 1;
		},
		setPage: (state, action) => {
			state.page = action.payload;
		},
	},
	extraReducers: (builder) => {
		builder.addCase("input/updateInput", (state) => {
			state.page = 1;
		});
	},
});

export const { incrementPage, decrementPage, setPage } =
	paginationSlice.actions;

export default paginationSlice.reducer;
