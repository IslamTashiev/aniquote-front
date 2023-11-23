import React from "react";
import QuoteItem from "./QuoteItem";
import usePagesDataStore from "../../../store/pagesData/pagesData";

const QuotesList = () => {
	const { collectionDetailData, collectionDetailDataIsLoaded } = usePagesDataStore((state) => state);
	return (
		<div className='quotes-list container'>
			<h2 className='quotes-list-title'>
				Collection of <span>{collectionDetailData[0].anime}</span>
			</h2>
			<div className='quotes'>
				{collectionDetailData[0].quotes.map((item) => (
					<QuoteItem info={item} key={item._id} />
				))}
			</div>
		</div>
	);
};

export default QuotesList;
