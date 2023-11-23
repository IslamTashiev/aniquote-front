import React from "react";
import TextHeader from "../../../ui/TextHeader";
import CollectionItem from "./CollectionItem";
import getMoreImage from "../../../assets/Get-more.png";

import "./_style.scss";

const CollectionList = () => {
	return (
		<div className='collection-list container large'>
			<TextHeader title='Our collection' subtitle="We've curated a selection of quotes from a diverse range of anime series, including:" />
			<div className='collection-list-items'>
				<CollectionItem />
				<CollectionItem />
				<CollectionItem />
				<CollectionItem />
				<CollectionItem />
				<CollectionItem />
				<CollectionItem />
				<CollectionItem />
				<CollectionItem />
				<CollectionItem />
			</div>
			<div className='collection-list-get-more'>
				<img src={getMoreImage} alt='get-more' />
				<p className='collection-list-get-more-text'>Looking for something else?</p>
				<button className='btn'>Load more</button>
			</div>
		</div>
	);
};

export default CollectionList;
