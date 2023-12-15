import React from "react";
import MainHero from "./components/MainHero";
import AboutUsSection from "./components/AboutUsSection";
import { Helmet } from "react-helmet";

const AboutUs = () => {
	return (
		<div data-aos='zoom-out'>
			<MainHero />
			<AboutUsSection />
		</div>
	);
};

const ComponentWrapper = () => {
	return (
		<>
			<Helmet>
				<title>AniQuote • About Us</title>
				<meta
					name='description'
					content='Journey into the Enchanting Realm of Anime Quotes – Unearth Profound Wisdom, Indulge in Witty Humor, and Ignite Inspiration through the Words of Beloved Characters. Explore a Treasure Trove of Emotions and Insights'
				/>
			</Helmet>
			<AboutUs />
		</>
	);
};

export default ComponentWrapper;
