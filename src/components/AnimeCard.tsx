import React from "react";
import QuoteText from "./QuoteText";

const AnimeCard = () => {
	return (
		<div className='anime-card'>
			<img
				className='anime-card-image'
				src='https://i.pinimg.com/originals/80/bf/3b/80bf3bbd22eed39d0c36a30323d94137.jpg'
				alt='anime-card'
			/>
			<div className='anime-card-content'>
				<h4 className='anime-card-title'>Attack On Titans</h4>
				<div className='anime-card-quotes-list'>
					<QuoteText
						wrapperClass='anime-card-quote-wrapper'
						author='Soi Fon'
						quote='Things like protecting the world are no more than moral reasons that sound good'
					/>
					<QuoteText
						wrapperClass='anime-card-quote-wrapper'
						author='Soi Fon'
						quote='Things like protecting the world are no more than moral reasons that sound good'
					/>
					<QuoteText
						wrapperClass='anime-card-quote-wrapper'
						author='Soi Fon'
						quote='Things like protecting the world are no more than moral reasons that sound good'
					/>
				</div>
				<button className='btn'>See more</button>
			</div>
		</div>
	);
};

export default AnimeCard;
