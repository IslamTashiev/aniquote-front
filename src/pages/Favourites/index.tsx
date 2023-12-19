import React, { useEffect } from "react";
import QuotesList from "../../components/quote-list/QuotesList";
import MainPoster from "../../components/quote-list/MainPoster";
import useUserStore from "../../store/user/userStore";
import { Helmet } from "react-helmet";

const Favourites = () => {
	const { getFavourites, favourites, favouritesIsLoaded } = useUserStore((state) => state);

	useEffect(() => {
		getFavourites();
	}, [getFavourites]);
	console.log(favourites);

	return (
		<div data-aos='zoom-out'>
			<MainPoster quotesList={favourites} isLoading={favouritesIsLoaded} title='Your saved  ' subTitle={favouritesIsLoaded && !favourites?.quotes.length ? "quotes is empty" : "quotes"} />
			<QuotesList quotesList={favourites} isLoading={favouritesIsLoaded} showAnimeTitle={true} />
		</div>
	);
};

const ComponentWrapper = () => {
	return (
		<>
			<Helmet>
				<title>AniQuote • Favourites</title>
				<meta name='description' content='User favourites' />
			</Helmet>
			<Favourites />
		</>
	);
};

export default ComponentWrapper;
