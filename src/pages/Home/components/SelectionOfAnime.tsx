import React, { useState } from "react";
import { Swiper as SwiperTypes } from "swiper";
import TextHeader from "../../../ui/TextHeader";
import SelectionOfAnimeCarousel from "./SelectionOfAnimeCarousel";
import SelectionCarouselButtons from "./SelectionCarouselButtons";

import "./_style.scss";

const SelectionOfAnime = () => {
	const [swiper, setSwiper] = useState<SwiperTypes | null>(null);
	const [currentSlideIndex, setCurrentSlideIndex] = useState<number>(0);
	console.log(swiper);

	return (
		<div className='selection-of-anime'>
			<div className='selection-of-anime-content container'>
				<div className='selection-of-anime-header'>
					<TextHeader title='A selection of anime' subtitle='We have selected the best quotes from the best anime' />
					<SelectionCarouselButtons swiper={swiper} currentSlideIndex={currentSlideIndex} />
				</div>
				<SelectionOfAnimeCarousel setSwiper={setSwiper} setCurrentSlideIndex={setCurrentSlideIndex} />
			</div>
		</div>
	);
};

export default SelectionOfAnime;
