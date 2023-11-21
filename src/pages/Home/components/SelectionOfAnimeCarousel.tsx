import { Swiper, SwiperSlide } from "swiper/react";
import AnimeCard from "../../../components/AnimeCard";

import "swiper/css";
import "./_style.scss";
import usePagesDataStore from "../../../store/pagesData/pagesData";
import { useEffect } from "react";

const SelectionOfAnimeCarousel = () => {
	const { animeCards, getAnimeCards } = usePagesDataStore((state) => state);

	useEffect(() => {
		getAnimeCards();
	}, [getAnimeCards]);
	return (
		<Swiper className='collection-swiper' slidesPerView={4} spaceBetween={20}>
			{animeCards.map((card) => (
				<SwiperSlide key={card._id}>
					<AnimeCard info={card} />
				</SwiperSlide>
			))}
		</Swiper>
	);
};

export default SelectionOfAnimeCarousel;
