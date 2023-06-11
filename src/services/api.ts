import axios from "axios";

const apiUrl = "https://api.github.com";

export const getGithubRepositories = async (query: string, page: number) =>
	await axios.get(`${apiUrl}/search/repositories`, {
		headers: {
			Authorization: `${import.meta.env.GITHUB_TOKEN}`,
		},
		params: {
			q: query,
			per_page: 3,
			page: page,
		},
	});
