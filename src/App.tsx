import { FC } from "react";
import { Input } from "./components/Input";
import { Card } from "./components/Card";
import { useSelector } from "react-redux";
import { Pagination } from "./components/Pagination";
import { RootState } from "./store";

const App: FC = () => {
	const { repositories, isLoading, isErrored, errorMessage } = useSelector(
		(state: RootState) => state.repos
	);

	return (
		<>
			<Input />
			{isLoading && <p>Loading...</p>}
			{isErrored && <p>{errorMessage}</p>}
			{!isLoading && !isErrored && repositories.length > 0 && (
				<>
					{repositories.map(
						({
							owner,
							name,
							description,
							language,
							watchers,
							stargazers_count,
						}) => (
							<Card
								key={`${owner.login}/${name}`}
								repoName={name}
								author={owner.login}
								description={description}
								language={language}
								watchers={watchers}
								stargazersCount={stargazers_count}
							/>
						)
					)}
					<Pagination />
				</>
			)}
		</>
	);
};

export default App;
