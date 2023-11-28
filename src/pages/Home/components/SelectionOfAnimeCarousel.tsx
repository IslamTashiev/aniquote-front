import { Swiper, SwiperSlide } from "swiper/react";
import { useEffect } from "react";
import AnimeCard from "../../../components/AnimeCard";
import usePagesDataStore from "../../../store/pagesData/pagesData";
import AnimeCardsLoader from "./AnimeCardsLoader";

import "swiper/css";
import "./_style.scss";

const SelectionOfAnimeCarousel = () => {
	const { animeCards, getAnimeCards, animeCardsIsLoaded } = usePagesDataStore((state) => state);

	useEffect(() => {
		getAnimeCards();
	}, [getAnimeCards]);

	return animeCardsIsLoaded ? (
		<Swiper className='collection-swiper' slidesPerView={5} spaceBetween={20}>
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
