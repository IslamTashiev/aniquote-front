import { Swiper, SwiperSlide } from "swiper/react";
import { useState, useEffect } from "react";
import { Swiper as SwiperTypes } from "swiper";
import { EffectFade, Navigation, Pagination } from "swiper/modules";
import usePagesDataStore from "../../../store/pagesData/pagesData";
import MainCarauselItem from "../../../components/MainCarauselItem";
import MainCarouselLoader from "./MainCarouselLoader";

import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "./_style.scss";

export default function App() {
	const [swiper, setSwiper] = useState<SwiperTypes | null>(null);
	const [activeIndex, setActiveIndex] = useState<number>(0);

	const { getMainPosters, mainPosters, isMainPostersLoaded } = usePagesDataStore((state) => state);

	const slideTo = (slideIndex: number) => {
		if (swiper) {
			swiper.slideTo(slideIndex);
		}
	};

	useEffect(() => {
		getMainPosters();
	}, [getMainPosters]);

	return (
		<>
			{isMainPostersLoaded ? (
				<Swiper
					spaceBetween={30}
					effect={"fade"}
					modules={[EffectFade, Navigation, Pagination]}
					onInit={(event: SwiperTypes) => setSwiper(event)}
					onSlideChange={({ activeIndex }: SwiperTypes) => setActiveIndex(activeIndex)}
				>
					{mainPosters.map((item, index) => (
						<SwiperSlide key={index}>
							<MainCarauselItem slideTo={slideTo} info={item} activeItem={activeIndex} slidesCount={mainPosters.length} />
						</SwiperSlide>
					))}
				</Swiper>
			) : (
				<MainCarouselLoader />
			)}
		</>
	);
}
