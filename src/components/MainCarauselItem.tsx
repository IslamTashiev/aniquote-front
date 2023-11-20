import clsx from "clsx";

import QuoteText from "./QuoteText";
import { ReactComponent as FavoiriteIcon } from "../assets/Favoirite.svg";

import "./_style.scss";
import { IMainCarouselData } from "../models";

interface MainCarauselItemProps {
	info: IMainCarouselData;
	activeItem: number;
	slidesCount: number;
	slideTo: (slideIndex: number) => void;
}

const MainCarauselItem = ({ info, activeItem, slidesCount, slideTo }: MainCarauselItemProps) => {
	return (
		<div style={{ background: `url(${info.anime_bckg}) center` }} className='main-carousel-item'>
			<div className='main-carousel-item-content container'>
				<img className='main-carousel-item-anime-logo' src={info.anime_logo} alt='anime-logo' />
				<QuoteText author={info.character} quote={info.quote} wrapperClass='carousel-quote' />
				<div className='main-carousel-item-btns'>
					<button className='btn see-more'>See more</button>
					<button className='btn btn-icon'>
						<FavoiriteIcon />
					</button>
				</div>
				<div className='pagination'>
					{new Array(slidesCount).fill(slidesCount).map((_, index) => (
						<div onClick={() => slideTo(index)} key={Math.random()} className={clsx("pagination-item", { active: activeItem === index })}></div>
					))}
				</div>
			</div>
		</div>
	);
};

export default MainCarauselItem;
