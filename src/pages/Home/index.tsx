import React from "react";
import MainCarousel from "./components/MainCarousel";
import SelectionOfAnime from "./components/SelectionOfAnime";

import "./_style.scss";

const Home = () => {
	return (
		<div data-aos='zoom-out'>
			<MainCarousel />
			<SelectionOfAnime />
		</div>
	);
};

export default Home;
