import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";

import "./_style.scss";

import { EffectFade, Navigation, Pagination } from "swiper/modules";
import MainCarauselItem from "../../../components/MainCarauselItem";

export default function App() {
	return (
		<>
			<Swiper
				spaceBetween={30}
				effect={"fade"}
				modules={[EffectFade, Navigation, Pagination]}
				className='mySwiper'
			>
				<SwiperSlide>
					<MainCarauselItem />
				</SwiperSlide>
				<SwiperSlide>
					<MainCarauselItem />
				</SwiperSlide>
				<SwiperSlide>
					<MainCarauselItem />
				</SwiperSlide>
			</Swiper>
		</>
	);
}
