import React, { useEffect, useState } from "react";
import QuoteItem from "./QuoteItem";
import usePagesDataStore from "../../../store/pagesData/pagesData";
import QuotesListLoader from "./QuotesListLoader";
import { IQuote } from "../../../models";

interface IFormatedCollection {
	quotes: string[];
	character: string;
}

const QuotesList = () => {
	const { collectionDetailData, collectionDetailDataIsLoaded } = usePagesDataStore((state) => state);
	const [formatedCollection, setFormatedCollection] = useState<IFormatedCollection[]>([]);

	const filterUniqueByField = (arr: IQuote[]) => {
		const uniqueValuesMap = new Map<string, boolean>();
		const uniqueValues: string[] = [];

		arr.forEach((item) => {
			const value = item.character;
			if (!uniqueValuesMap.has(value)) {
				uniqueValuesMap.set(value, true);
				uniqueValues.push(value);
			}
		});

		return uniqueValues;
	};

	useEffect(() => {
		if (collectionDetailDataIsLoaded) {
			const filteredQuotes = filterUniqueByField(collectionDetailData[0].quotes).map((name) => {
				const filteredByCharacter = collectionDetailData[0].quotes.filter((item) => item.character === name).map((item) => item.quote);
				const mergedQuotes = filteredByCharacter.flat();
				return { quotes: mergedQuotes, character: name } as IFormatedCollection;
			});
			setFormatedCollection(filteredQuotes);
		}
	}, [collectionDetailDataIsLoaded, collectionDetailData]);

	return (
		<div className='quotes-list container'>
			{collectionDetailDataIsLoaded && (
				<h2 className='quotes-list-title'>
					Collection of <span>{collectionDetailData[0].anime}</span>
				</h2>
			)}

			{collectionDetailDataIsLoaded && formatedCollection.length ? (
				formatedCollection.map((item) => (
					<div className='quotes-group'>
						<h4 className='quotes-group-title'>{item.character}</h4>
						<div className='quotes'>
							{item.quotes.map((item) => (
								<QuoteItem key={item} quote={item} />
							))}
						</div>
					</div>
				))
			) : (
				<QuotesListLoader />
			)}
		</div>
	);
};

export default QuotesList;