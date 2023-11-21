import React from "react";
import QuoteText from "./QuoteText";
import { IAnimeCard } from "../models";

interface AnimeCardProps {
	info: IAnimeCard;
}

const AnimeCard = ({ info }: AnimeCardProps) => {
	return (
		<div className='anime-card'>
			<img className='anime-card-image' src={info.anime_bckg} alt='anime-card' />
			<div className='anime-card-content'>
				<h4 className='anime-card-title'>{info.anime}</h4>
				<div className='anime-card-quotes-list'>
					{info.quotes.map((quote) => (
						<QuoteText key={quote._id} wrapperClass='anime-card-quote-wrapper' author={quote.character} quote={quote.quote} />
					))}
				</div>
				<button className='btn'>See more</button>
			</div>
		</div>
	);
};

export default AnimeCard;
