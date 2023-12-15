import React from "react";
import MainPoster from "./components/MainPoster";
import CollectionList from "./components/CollectionList";
import { Helmet } from "react-helmet";

const Collections = () => {
	return (
		<div data-aos='zoom-out'>
			<MainPoster />
			<CollectionList />
		</div>
	);
};

const ComponentWrapper = () => {
	return (
		<>
			<Helmet>
				<title>AniQuote • Collection</title>
				<meta
					name='description'
					content='Unveil the Hidden Treasures of Anime Wisdom and Emotion - Our Vast Collection Brings Together a World of Quotes, From Timeless Classics to the Latest Releases. Immerse Yourself in the Universes of Beloved Characters, and Discover the Profound, the Witty, and the Inspirational'
				/>
			</Helmet>
			<Collections />
		</>
	);
};

export default ComponentWrapper;
