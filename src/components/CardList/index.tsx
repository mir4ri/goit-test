import { Card } from "../Card";

export const CardList = ({ repositories }: { repositories: any[] }) => (
	<>
		{repositories.map(
			({ owner, name, description, language, watchers, stargazers_count }) => (
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
	</>
);
