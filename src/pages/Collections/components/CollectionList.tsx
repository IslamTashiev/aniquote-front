import React, { useEffect, useState } from "react";
import TextHeader from "../../../ui/TextHeader";
import CollectionItem from "./CollectionItem";
import getMoreImage from "../../../assets/Get-more.png";

import "./_style.scss";
import usePagesDataStore from "../../../store/pagesData/pagesData";

const CollectionList = () => {
	const [currentPage, setCurrentPage] = useState<number>(1);
	const { collectionData, getCollectionData } = usePagesDataStore((state) => state);

	const handleLoadMore = () => {
		setCurrentPage(currentPage + 1);
	};

	useEffect(() => {
		getCollectionData(currentPage);
	}, [currentPage, getCollectionData]);

	return (
		<div className='collection-list container large'>
			<TextHeader title='Our collection' subtitle="We've curated a selection of quotes from a diverse range of anime series, including:" />
			<div className='collection-list-items'>
				{collectionData.map((item) => (
					<CollectionItem key={item._id} info={item} />
				))}
			</div>
			<div className='collection-list-get-more'>
				<img src={getMoreImage} alt='get-more' />
				<p className='collection-list-get-more-text'>Looking for something else?</p>
				<button className='btn' onClick={handleLoadMore}>
					Load more
				</button>
			</div>
		</div>
	);
};

export default CollectionList;
