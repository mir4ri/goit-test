import { FC } from "react";
import "./pagination.modules.scss";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../store";
import {
	decrementPage,
	incrementPage,
	setPage,
} from "../../features/paginationSlice";

export const Pagination: FC = () => {
	const dispatch = useDispatch();
	const { page } = useSelector((state: RootState) => state.pagination);
	return (
		<div className="pagination-container">
			<button
				className="button"
				onClick={() => dispatch(decrementPage())}
				disabled={page === 1}
			>
				Prev
			</button>
			{Array(10)
				.fill(0)
				.map((_, index) => (
					<button
						key={`button-${index}`}
						className={`button ${index + 1 === page ? "is-active" : ""}`}
						onClick={() => dispatch(setPage(index + 1))}
					>
						{index + 1}
					</button>
				))}
			<button
				className="button"
				onClick={() => dispatch(incrementPage())}
				disabled={page === 10}
			>
				Next
			</button>
		</div>
	);
};
