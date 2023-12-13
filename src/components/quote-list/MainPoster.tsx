import React, { useEffect, useState } from "react";
import QuoteText from "../QuoteText";
import { ICollectionItem, IQuote } from "../../models";
import "./_style.scss";

interface MainPosterProps {
	title: string;
	subTitle: string;
	quotesList: ICollectionItem | null;
	isLoading: boolean;
}

const MainPoster = ({ subTitle, title, quotesList, isLoading }: MainPosterProps) => {
	const [mainQuote, setMainQuote] = useState<IQuote | null>(null);
	const bgImage = isLoading ? quotesList?.anime_image[1] : "";

	useEffect(() => {
		if (isLoading && quotesList) {
			const randomIndex = Math.floor(Math.random() * quotesList?.quotes.length);
			setMainQuote(quotesList?.quotes[randomIndex]);
		}
	}, [quotesList, isLoading]);

	return (
		<div className='main-poster' style={{ background: `url(${bgImage}) no-repeat center`, backgroundSize: "cover" }}>
			<div className='main-poster-content container'>
				<h1 className='main-poster-title quotes-list-title'>
					{title}
					<span>{subTitle}</span>
				</h1>
				{mainQuote && <QuoteText wrapperClass='main-poster-quote' author={mainQuote.character} quote={mainQuote.quote} />}
			</div>
		</div>
	);
};

export default MainPoster;
