import React from "react";
import { ReactComponent as Arrow } from "../../../assets/Arrow.svg";

const SelectionCarouselButtons = () => {
	return (
		<div className='selection-carousel-buttons'>
			<button className='btn prev'>
				<Arrow />
			</button>
			<span className='selection-carousel-info'>1 of 2</span>
			<button className='btn'>
				<Arrow />
			</button>
		</div>
	);
};

export default SelectionCarouselButtons;
