import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import usePagesDataStore from "../../store/pagesData/pagesData";
import MainPoster from "./components/MainPoster";
import QuotesList from "./components/QuotesList";

const SelectionsDetail = () => {
	const { animeTitle } = useParams();
	const { getCollectionDetailData } = usePagesDataStore((state) => state);

	useEffect(() => {
		if (animeTitle) {
			getCollectionDetailData(animeTitle);
		}
	}, [getCollectionDetailData, animeTitle]);

	return (
		<>
			<MainPoster />
			<QuotesList />
		</>
	);
};

export default SelectionsDetail;
