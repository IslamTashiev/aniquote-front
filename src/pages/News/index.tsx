import React from "react";
import "./_style.scss";
import MainPoster from "./components/MainPoster";
import NewsList from "./components/NewsList";

const News = () => {
	return (
		<>
			<MainPoster /> <NewsList />
		</>
	);
};

export default News;
