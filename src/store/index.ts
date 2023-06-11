import { configureStore } from "@reduxjs/toolkit";
import inputSlice from "../features/inputSlice";
import paginationSlice from "../features/paginationSlice";

export const store = configureStore({
	reducer: {
		repos: inputSlice,
		pagination: paginationSlice,
	},
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
