import { FC, useEffect } from "react";
import "./input.modules.scss";
import { useDispatch, useSelector } from "react-redux";
import {
	fetchGithubRepositories,
	updateInput,
} from "../../features/inputSlice";
import { AppDispatch, RootState } from "../../store";

export const Input: FC = () => {
	const dispatch = useDispatch<AppDispatch>();
	const { inputValue } = useSelector((state: RootState) => state.repos);
	const { page } = useSelector((state: RootState) => state.pagination);

	useEffect(() => {
		dispatch(fetchGithubRepositories({ query: inputValue, page: page }));
	}, [dispatch, inputValue, page]);

	return (
		<input
			className="input"
			placeholder="Search"
			value={inputValue}
			type="text"
			onChange={({ target }) => dispatch(updateInput(target.value))}
		/>
	);
};
