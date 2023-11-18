import React from "react";
import MainCarousel from "./components/MainCarousel";
import SelectionOfAnime from "./components/SelectionOfAnime";

import "./_style.scss";

const Home = () => {
	return (
		<>
			<MainCarousel />
			<SelectionOfAnime />
		</>
	);
};

export default Home;
