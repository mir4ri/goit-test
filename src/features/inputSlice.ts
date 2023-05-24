import {
	createAsyncThunk,
	createSlice,
} from "@reduxjs/toolkit";
import axios from "axios";

const apiUrl = "https://api.github.com";

export const fetchGithubRepositories = createAsyncThunk(
	"repo/fetchGithubRepositories",
	async (query: { query: string; page: number }, { rejectWithValue }) => {
		try {
			const response = await axios.get(`${apiUrl}/search/repositories`, {
				headers: {
					Authorization: `${import.meta.env.GITHUB_TOKEN}`,
				},
				params: {
					q: query.query,
					per_page: 3,
					page: query.page,
				},
			});

			return response.data?.items || [];
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
		page: 1,
	},
	reducers: {
		updateInput: (state, action) => {
			state.inputValue = action.payload;
			state.page = 1;
		},
		incrementPage: (state) => {
			state.page += 1;
		},
		decrementPage: (state) => {
			state.page -= 1;
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

export const { updateInput, incrementPage, decrementPage } = inputSlice.actions;

export default inputSlice.reducer;
