import { Swiper, SwiperSlide } from "swiper/react";
import { useState } from "react";
import { Swiper as SwiperTypes } from "swiper";
import { EffectFade, Navigation, Pagination } from "swiper/modules";

import MainCarauselItem from "../../../components/MainCarauselItem";

import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "./_style.scss";

const slides = [
	{
		logo: "https://www.pngarts.com/files/11/Ultimate-Ninja-Naruto-Shippuden-Logo-PNG-Picture.png",
		quote:
			'It seems like the small leaves in the Village of Konoha have inherited that "will of fire" you spoke of, Third. The fire on the leaves will eventually burn greater and stronger... It will flash its light and protect this village.',
		author: "Soi Fon",
		bckgImage:
			"http://pm1.narvii.com/7216/dad633997999ce8f099da92c13d773e4278f83der1-1500-1000v2_uhq.jpg",
	},
	{
		logo: "https://ww2.freelogovectors.net/wp-content/uploads/2023/01/attackontitanlogo-freelogovectors.net_.png",
		quote:
			'It seems like the small leaves in the Village of Konoha have inherited that "will of fire" you spoke of, Third. The fire on the leaves will eventually burn greater and stronger... It will flash its light and protect this village.',
		author: "Soi Fon",
		bckgImage:
			"https://steamuserimages-a.akamaihd.net/ugc/1711916442914027170/FFD57506B1D936A08B9411E9737C9851A85028C6/?imw=512&amp;imh=306&amp;ima=fit&amp;impolicy=Letterbox&amp;imcolor=%23000000&amp;letterbox=true",
	},
	{
		logo: "https://i.pinimg.com/originals/49/0b/33/490b33b5b4f103847f062f5d89d03ba5.png",
		quote:
			'It seems like the small leaves in the Village of Konoha have inherited that "will of fire" you spoke of, Third. The fire on the leaves will eventually burn greater and stronger... It will flash its light and protect this village.',
		author: "Soi Fon",
		bckgImage:
			"https://wallpapers.com/images/file/luffy-and-one-piece-characters-xg8g2wdde1fl6yhq.jpg",
	},
];

export default function App() {
	const [swiper, setSwiper] = useState<SwiperTypes | null>(null);
	const [activeIndex, setActiveIndex] = useState<number>(0);

	const slideTo = (slideIndex: number) => {
		if (swiper) {
			swiper.slideTo(slideIndex);
		}
	};

	return (
		<>
			<Swiper
				spaceBetween={30}
				effect={"fade"}
				modules={[EffectFade, Navigation, Pagination]}
				onInit={(event: SwiperTypes) => setSwiper(event)}
				onSlideChange={({ activeIndex }: SwiperTypes) => setActiveIndex(activeIndex)}
			>
				{slides.map((item, index) => (
					<SwiperSlide key={index}>
						<MainCarauselItem
							slideTo={slideTo}
							info={item}
							activeItem={activeIndex}
							slidesCount={slides.length}
						/>
					</SwiperSlide>
				))}
			</Swiper>
		</>
	);
}
