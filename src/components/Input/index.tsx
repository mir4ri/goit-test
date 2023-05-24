import { FC, useEffect } from "react";
import "./input.modules.scss";
import { useDispatch, useSelector } from "react-redux";
import {
	fetchGithubRepositories,
	updateInput,
} from "../../features/inputSlice";
import { RootState } from "../../store";

export const Input: FC = () => {
	const dispatch = useDispatch();
	const { inputValue, page } = useSelector((state: RootState) => state.repos);

	useEffect(() => {
		dispatch(fetchGithubRepositories({query: inputValue, since: page}));
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
