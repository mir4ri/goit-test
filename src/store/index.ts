import { configureStore } from "@reduxjs/toolkit";
import inputSlice from "../features/inputSlice";

export const store = configureStore({
	reducer: {
		repos: inputSlice,
	},
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
