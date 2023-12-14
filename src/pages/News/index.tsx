import React from "react";
import "./_style.scss";
import MainPoster from "./components/MainPoster";
import NewsList from "./components/NewsList";

const News = () => {
	return (
		<div data-aos='zoom-out'>
			<MainPoster /> <NewsList />
		</div>
	);
};

export default News;
