import { Swiper, SwiperSlide } from "swiper/react";
import AnimeCard from "../../../components/AnimeCard";

import "swiper/css";
import "./_style.scss";

const SelectionOfAnimeCarousel = () => {
	return (
		<Swiper className='collection-swiper' slidesPerView={4} spaceBetween={20}>
			<SwiperSlide>
				<AnimeCard />
			</SwiperSlide>
			<SwiperSlide>
				<AnimeCard />
			</SwiperSlide>
			<SwiperSlide>
				<AnimeCard />
			</SwiperSlide>
			<SwiperSlide>
				<AnimeCard />
			</SwiperSlide>
			<SwiperSlide>
				<AnimeCard />
			</SwiperSlide>
			<SwiperSlide>
				<AnimeCard />
			</SwiperSlide>
		</Swiper>
	);
};

export default SelectionOfAnimeCarousel;
