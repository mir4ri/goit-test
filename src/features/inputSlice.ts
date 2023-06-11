import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getGithubRepositories } from "../services/api";
import { store } from "../store";

export const fetchGithubRepositories = createAsyncThunk(
	"repo/fetchGithubRepositories",
	async (query: { query: string; page: number }, { rejectWithValue }) => {
		try {
			const response = getGithubRepositories(query.query, query.page);

			return (await response).data?.items || [];
		} catch (error: any) {
			return rejectWithValue(error.response.data.message);
		}
	}
);

export const inputSlice = createSlice({
	name: "input",
	initialState: {
		inputValue: "react",
		isLoading: false,
		isErrored: false,
		errorMessage: "",
		repositories: [] as any[],
	},
	reducers: {
		updateInput: (state, action) => {
			state.inputValue = action.payload;
		},
	},
	extraReducers: (builder) => {
		builder
			.addCase(fetchGithubRepositories.pending, (state) => {
				state.isLoading = true;
			})
			.addCase(fetchGithubRepositories.fulfilled, (state, action) => {
				state.isLoading = false;
				state.repositories = action.payload;
			})
			.addCase(fetchGithubRepositories.rejected, (state, action) => {
				state.isLoading = false;
				state.repositories = [];
				state.isErrored = true;
				state.errorMessage = action.payload as string;
			});
	},
});

export const { updateInput } = inputSlice.actions;

export default inputSlice.reducer;
