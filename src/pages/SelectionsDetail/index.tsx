import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import usePagesDataStore from "../../store/pagesData/pagesData";
import QuotesList from "../../components/quote-list/QuotesList";
import MainPoster from "../../components/quote-list/MainPoster";
import { Helmet } from "react-helmet";

const SelectionsDetail = () => {
	const { animeTitle } = useParams();
	const { getCollectionDetailData, collectionDetailData, collectionDetailDataIsLoaded } = usePagesDataStore((state) => state);

	useEffect(() => {
		if (animeTitle) {
			getCollectionDetailData(animeTitle);
		}
	}, [getCollectionDetailData, animeTitle]);

	return (
		<div data-aos='zoom-out'>
			<MainPoster quotesList={collectionDetailData} isLoading={collectionDetailDataIsLoaded} title='Collection  of ' subTitle={animeTitle ?? ""} />
			<QuotesList quotesList={collectionDetailData} isLoading={collectionDetailDataIsLoaded} showAnimeTitle={false} />
		</div>
	);
};

const ComponentWrapper = () => {
	const { animeTitle } = useParams();
	return (
		<>
			<Helmet>
				<title>AniQuote • {animeTitle}</title>
				<meta name='description' content='News page' />
			</Helmet>
			<SelectionsDetail />
		</>
	);
};

export default ComponentWrapper;
