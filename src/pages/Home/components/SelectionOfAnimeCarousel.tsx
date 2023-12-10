import { Swiper, SwiperSlide } from "swiper/react";
import { Swiper as SwiperTypes } from "swiper";
import AnimeCard from "../../../components/AnimeCard";
import usePagesDataStore from "../../../store/pagesData/pagesData";
import clsx from "clsx";

import "swiper/css";
import "./_style.scss";

interface SelectionOfAnimeCarouselProps {
	setSwiper: (swiper: SwiperTypes | null) => void;
	setCurrentSlideIndex: (index: number) => void;
}

const swiperBreakpoints = {
	1400: {
		spaceBetween: 20,
		slidesPerView: 5,
	},
	1200: {
		spaceBetween: 15,
		slidesPerView: 5,
	},

	900: {
		spaceBetween: 10,
		slidesPerView: 4,
	},
	768: {
		spaceBetween: 10,
		slidesPerView: 3,
	},
	0: {
		spaceBetween: 10,
		slidesPerView: 2,
	},
};

const SelectionOfAnimeCarousel = ({ setSwiper, setCurrentSlideIndex }: SelectionOfAnimeCarouselProps) => {
	const { animeCards } = usePagesDataStore((state) => state);

	return (
		<Swiper onInit={(e: SwiperTypes) => setSwiper(e)} onSlideChange={(e: SwiperTypes) => setCurrentSlideIndex(e.activeIndex)} className='collection-swiper' breakpoints={swiperBreakpoints}>
			{animeCards.map((card, index) => (
				<SwiperSlide className={clsx(index === animeCards.length - 1 ? "last" : index === animeCards.length - 2 ? "prelast" : "")} key={card._id}>
					<AnimeCard info={card} />
				</SwiperSlide>
			))}
		</Swiper>
	);
};

export default SelectionOfAnimeCarousel;
