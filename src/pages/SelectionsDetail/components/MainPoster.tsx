import React from "react";
import "./_style.scss";
import { useParams } from "react-router-dom";
import QuoteText from "../../../components/QuoteText";
import { IQuote } from "../../../models";

interface MainPosterProps {
	bgImage: string | undefined;
	mainQuote: IQuote | null;
}

const MainPoster = ({ bgImage, mainQuote }: MainPosterProps) => {
	const { animeTitle } = useParams();

	return (
		<div className='main-poster' style={{ background: `url(${bgImage}) no-repeat center`, backgroundSize: "cover" }}>
			<div className='main-poster-content container'>
				<h1 className='main-poster-title quotes-list-title'>
					Collection of
					<br />
					<span>{animeTitle}</span>
				</h1>
				{mainQuote && <QuoteText wrapperClass='main-poster-quote' author={mainQuote.character} quote={mainQuote.quote} />}
			</div>
		</div>
	);
};

export default MainPoster;
