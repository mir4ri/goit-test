import { FC } from "react";
import { Input } from "./components/Input";
import { useSelector } from "react-redux";
import { Pagination } from "./components/Pagination";
import { RootState } from "./store";
import { CardList } from "./components/CardList";

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
					<CardList repositories={repositories} />
					<Pagination />
				</>
			)}
		</>
	);
};

export default App;
