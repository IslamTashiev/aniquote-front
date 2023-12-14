import React, { useEffect } from "react";
import QuotesList from "../../components/quote-list/QuotesList";
import MainPoster from "../../components/quote-list/MainPoster";
import useUserStore from "../../store/user/userStore";

const Favourites = () => {
	const { getFavourites, favourites, favouritesIsLoaded } = useUserStore((state) => state);

	useEffect(() => {
		getFavourites();
	}, [getFavourites]);

	return (
		<div data-aos='zoom-out'>
			<MainPoster quotesList={favourites} isLoading={favouritesIsLoaded} title='Your saved  ' subTitle='quotes' />
			<QuotesList quotesList={favourites} isLoading={favouritesIsLoaded} showAnimeTitle={true} />
		</div>
	);
};

export default Favourites;
