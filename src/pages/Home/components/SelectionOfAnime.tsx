import React from "react";
import TextHeader from "../../../ui/TextHeader";
import SelectionOfAnimeCarousel from "./SelectionOfAnimeCarousel";

import "./_style.scss";

const SelectionOfAnime = () => {
	return (
		<div className='selection-of-anime'>
			<div className='selection-of-anime-content container'>
				<TextHeader
					title='A selection of anime'
					subtitle='We have selected the best quotes from the best anime'
				/>
				<SelectionOfAnimeCarousel />
			</div>
		</div>
	);
};

export default SelectionOfAnime;
