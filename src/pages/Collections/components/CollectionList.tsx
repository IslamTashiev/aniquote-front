import React, { useEffect, useState } from "react";
import TextHeader from "../../../ui/TextHeader";
import CollectionItem from "./CollectionItem";
import getMoreImage from "../../../assets/Get-more.png";
import usePagesDataStore from "../../../store/pagesData/pagesData";
import CollectionListLoader from "./CollectionListLoader";
import { ReactComponent as SearchIcon } from "../../../assets/Search.svg";
import CollectionSearchModal from "./CollectionSearchModal";

import "./_style.scss";

const CollectionList = () => {
	const { collectionData, getCollectionData, loadedCollectionPages, collectionDataIsLoaded } = usePagesDataStore((state) => state);
	const [currentPage, setCurrentPage] = useState<number>(loadedCollectionPages || 1);
	const [isModalActive, setIsModalActive] = useState<boolean>(false);

	const handleLoadMore = () => {
		setCurrentPage(currentPage + 1);
	};
	const handleModal = () => {
		setIsModalActive(!isModalActive);
	};

	useEffect(() => {
		getCollectionData(currentPage);
	}, [currentPage, getCollectionData]);

	return (
		<div className='collection-list container large'>
			<div className='collection-list-header'>
				<TextHeader title='Our collection' subtitle="We've curated a selection of quotes from a diverse range of anime series, including:" />
				<button className='btn btn-text collection-list-search-btn' onClick={handleModal}>
					Search
					<SearchIcon />
				</button>
				<CollectionSearchModal isActive={isModalActive} onChangeActiveState={handleModal} />
			</div>
			<div className='collection-list-items'>
				{collectionData.map((item) => (
					<CollectionItem key={item._id} info={item} />
				))}
				{!collectionDataIsLoaded && [...new Array(8)].map(() => <CollectionListLoader key={Math.random() + Math.random()} />)}
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
