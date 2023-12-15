import React from "react";
import MainCarousel from "./components/MainCarousel";
import SelectionOfAnime from "./components/SelectionOfAnime";

import "./_style.scss";
import { Helmet } from "react-helmet";

const Home = () => {
	return (
		<div data-aos='zoom-out'>
			<MainCarousel />
			<SelectionOfAnime />
		</div>
	);
};

const ComponentWrapper = () => {
	return (
		<>
			<Helmet>
				<title>AniQuote</title>
				<meta
					name='description'
					content="Welcome to a haven of anime wisdom, where each page is a gateway to your favorite shows' profound quotes. From classics to the latest hits, we gather the essence of anime in unforgettable lines. Dive into a world of inspiration, wit, and emotion captured in the words of beloved characters. Let's explore the realm of wisdom, adventure, and feelings only anime can offer"
				/>
			</Helmet>
			<Home />
		</>
	);
};

export default ComponentWrapper;
