import { FC } from "react";
import ReactIMG from "../../assets/react.svg";
import StarIMG from "../../assets/star.svg";
import PersonIMG from "../../assets/person.svg";
import "./card.modules.scss";

interface ICardProps {
	repoName: string;
	author: string;
	description: string;
	language: string;
	watchers: number;
	stargazersCount: number;
}

export const Card: FC<ICardProps> = ({
	repoName,
	author,
	description,
	language,
	watchers,
	stargazersCount,
}) => (
	<article className="card">
		<div className="left-side">
			<img className="react-img" src={ReactIMG} />
			<div className="text-container">
				<h1 className="title">{repoName}</h1>
				<p className="text light-text">{author}</p>
				<p className="text light-text">{language}</p>
				<p className="text description">{description}</p>
			</div>
		</div>
		<div className="right-side">
			<div className="statistic">
				<img src={StarIMG} width="24" height="24" />
				{stargazersCount}&nbsp;<span className="light-text">stars</span>
			</div>
			<div className="statistic">
				<img src={PersonIMG} width="24" height="24" />
				{watchers} watchers
			</div>
		</div>
	</article>
);
