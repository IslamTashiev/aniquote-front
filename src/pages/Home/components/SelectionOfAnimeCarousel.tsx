import { Swiper, SwiperSlide } from "swiper/react";
import { useEffect } from "react";
import { Swiper as SwiperTypes } from "swiper";
import AnimeCard from "../../../components/AnimeCard";
import usePagesDataStore from "../../../store/pagesData/pagesData";
import AnimeCardsLoader from "./AnimeCardsLoader";

import "swiper/css";
import "./_style.scss";

interface SelectionOfAnimeCarouselProps {
	setSwiper: (swiper: SwiperTypes | null) => void;
	setCurrentSlideIndex: (index: number) => void;
}

const SelectionOfAnimeCarousel = ({ setSwiper, setCurrentSlideIndex }: SelectionOfAnimeCarouselProps) => {
	const { animeCards, getAnimeCards, animeCardsIsLoaded } = usePagesDataStore((state) => state);

	useEffect(() => {
		getAnimeCards();
	}, [getAnimeCards]);

	return animeCardsIsLoaded ? (
		<Swiper onInit={(e: SwiperTypes) => setSwiper(e)} onSlideChange={(e: SwiperTypes) => setCurrentSlideIndex(e.activeIndex)} className='collection-swiper' slidesPerView={5} spaceBetween={20}>
			{animeCards.map((card) => (
				<SwiperSlide key={card._id}>
					<AnimeCard info={card} />
				</SwiperSlide>
			))}
		</Swiper>
	) : (
		<AnimeCardsLoader />
	);
};

export default SelectionOfAnimeCarousel;
