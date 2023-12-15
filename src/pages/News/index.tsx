import React from "react";
import "./_style.scss";
import MainPoster from "./components/MainPoster";
import NewsList from "./components/NewsList";
import { Helmet } from "react-helmet";

const News = () => {
	return (
		<div data-aos='zoom-out'>
			<MainPoster /> <NewsList />
		</div>
	);
};

const ComponentWrapper = () => {
	return (
		<>
			<Helmet>
				<title>AniQuote • News</title>
				<meta name='description' content='News page' />
			</Helmet>
			<News />
		</>
	);
};

export default ComponentWrapper;
