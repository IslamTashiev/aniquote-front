import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import usePagesDataStore from "../../store/pagesData/pagesData";
import MainPoster from "./components/MainPoster";
import QuotesList from "./components/QuotesList";
import { IQuote } from "../../models";

const SelectionsDetail = () => {
	const [mainQuote, setMainQuote] = useState<IQuote | null>(null);

	const { animeTitle } = useParams();
	const { getCollectionDetailData, collectionDetailData, collectionDetailDataIsLoaded } = usePagesDataStore((state) => state);

	useEffect(() => {
		if (animeTitle) {
			getCollectionDetailData(animeTitle);
		}
	}, [getCollectionDetailData, animeTitle]);
	useEffect(() => {
		if (collectionDetailDataIsLoaded) {
			const randomIndex = Math.floor(Math.random() * collectionDetailData[0].quotes.length);
			setMainQuote(collectionDetailData[0].quotes[randomIndex]);
		}
	}, [collectionDetailData, collectionDetailDataIsLoaded]);

	return (
		<>
			<MainPoster bgImage={collectionDetailDataIsLoaded ? collectionDetailData[0].anime_image[1] : ""} mainQuote={mainQuote} />
			<QuotesList />
		</>
	);
};

export default SelectionsDetail;
