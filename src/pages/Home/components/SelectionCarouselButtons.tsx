import React from "react";
import { ReactComponent as Arrow } from "../../../assets/Arrow.svg";
import { Swiper as SwiperTypes } from "swiper";

interface SelectionCarouselButtonsProps {
	swiper: SwiperTypes | null;
	currentSlideIndex: number;
}

const SelectionCarouselButtons = ({ swiper, currentSlideIndex }: SelectionCarouselButtonsProps) => {
	return (
		<div className='selection-carousel-buttons'>
			<button className='btn prev' onClick={() => swiper?.slidePrev()}>
				<Arrow />
			</button>
			<span className='selection-carousel-info'>
				{currentSlideIndex + 1} of {swiper?.snapGrid.length}
			</span>
			<button className='btn' onClick={() => swiper?.slideNext()}>
				<Arrow />
			</button>
		</div>
	);
};

export default SelectionCarouselButtons;
