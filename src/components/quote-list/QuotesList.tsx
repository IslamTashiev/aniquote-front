import React, { useEffect, useState } from "react";
import QuoteItem from "./QuoteItem";
import QuotesListLoader from "./QuotesListLoader";
import { ICollectionItem, IQuote } from "../../models";

interface IFormatedQuote {
	quote: string;
	quoteId: string;
}

interface IFormatedCollection {
	quotes: IFormatedQuote[];
	character: string;
	anime?: string;
}

interface IQuotesListProps {
	quotesList: ICollectionItem[];
	isLoading: boolean;
	showAnimeTitle: boolean;
}

const QuotesList = ({ isLoading, quotesList, showAnimeTitle }: IQuotesListProps) => {
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
		if (isLoading) {
			const filteredQuotes = filterUniqueByField(quotesList[0].quotes).map((name) => {
				const filteredByCharacter = quotesList[0].quotes.filter((item) => item.character === name).map((item) => ({ quote: item.quote, quoteId: item._id }));
				const mergedQuotes = filteredByCharacter.flat();
				const characterItem = quotesList[0].quotes.find((item) => item.character === name);
				const anime = characterItem ? characterItem.anime : "";
				return { quotes: mergedQuotes, character: name, anime } as IFormatedCollection;
			});
			setFormatedCollection(filteredQuotes);
		}
	}, [isLoading, quotesList]);

	return (
		<div className='quotes-list container'>
			{isLoading && formatedCollection.length ? (
				formatedCollection.map((item) => (
					<div className='quotes-group'>
						<h4 className='quotes-group-title'>
							{item.character}
							{item.anime && showAnimeTitle && <span>{item.anime}</span>}
						</h4>
						<div className='quotes'>
							{item.quotes.map((item) => (
								<QuoteItem key={item.quoteId} quote={item.quote} quoteId={item.quoteId} />
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
