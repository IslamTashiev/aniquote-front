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
	const [scrollPosition, setScrollPosition] = useState(0);

	useEffect(() => {
		if (isLoading && quotesList) {
			const randomIndex = Math.floor(Math.random() * quotesList.quotes.length);
			setMainQuote(quotesList.quotes[randomIndex]);
		}

		return () => {
			setMainQuote(null);
		};
	}, [quotesList, isLoading]);

	useEffect(() => {
		const handleScroll = () => {
			setScrollPosition(window.scrollY);
		};

		window.addEventListener("scroll", handleScroll);
		return () => {
			window.removeEventListener("scroll", handleScroll);
		};
	}, []);

	const bgImage = isLoading && quotesList?.anime_image?.length ? quotesList.anime_image[1] : "";
	const parallaxOffset = scrollPosition * 0.35;

	const posterStyle: React.CSSProperties = {
		background: `url(${bgImage}) no-repeat center`,
		backgroundSize: "cover",
		backgroundPosition: `center ${parallaxOffset}px`,
	};

	return (
		<div className='main-poster' style={posterStyle}>
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
