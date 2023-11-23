import React from "react";
import QuoteItem from "./QuoteItem";
import usePagesDataStore from "../../../store/pagesData/pagesData";
import QuotesListLoader from "./QuotesListLoader";

const QuotesList = () => {
	const { collectionDetailData, collectionDetailDataIsLoaded } = usePagesDataStore((state) => state);
	return (
		<div className='quotes-list container'>
			{collectionDetailDataIsLoaded && (
				<h2 className='quotes-list-title'>
					Collection of <span>{collectionDetailData[0].anime}</span>
				</h2>
			)}

			{collectionDetailDataIsLoaded ? (
				<div className='quotes'>
					{collectionDetailData[0].quotes.map((item) => (
						<QuoteItem info={item} key={item._id} />
					))}
				</div>
			) : (
				<QuotesListLoader />
			)}
		</div>
	);
};

export default QuotesList;
