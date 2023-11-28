import React from "react";
import TextHeader from "../../../ui/TextHeader";
import SelectionOfAnimeCarousel from "./SelectionOfAnimeCarousel";

import "./_style.scss";
import SelectionCarouselButtons from "./SelectionCarouselButtons";

const SelectionOfAnime = () => {
	return (
		<div className='selection-of-anime'>
			<div className='selection-of-anime-content container'>
				<div className='selection-of-anime-header'>
					<TextHeader title='A selection of anime' subtitle='We have selected the best quotes from the best anime' />
					<SelectionCarouselButtons />
				</div>
				<SelectionOfAnimeCarousel />
			</div>
		</div>
	);
};

export default SelectionOfAnime;
