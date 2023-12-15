import clsx from "clsx";

import { useState, useEffect } from "react";
import QuoteText from "./QuoteText";
import { ReactComponent as FavoiriteIcon } from "../assets/Favoirite.svg";
import { IMainCarouselData } from "../models";
import { useNavigate } from "react-router-dom";
import useUserStore from "../store/user/userStore";

import "./_style.scss";
import { useAppStore } from "../store/appStore";

interface MainCarauselItemProps {
	info: IMainCarouselData;
	activeItem: number;
	slidesCount: number;
	slideTo: (slideIndex: number) => void;
}

const MainCarauselItem = ({ info, activeItem, slidesCount, slideTo }: MainCarauselItemProps) => {
	const [isQuoteInFavourites, setIsQuoteInFavourites] = useState<boolean>(false);

	const navigate = useNavigate();
	const { userData, addToFavourites, isUserLoggedIn } = useUserStore((state) => state);
	const { checkUserAuthorized } = useAppStore((state) => state);

	const handleFavourite = () => {
		setIsQuoteInFavourites(!isQuoteInFavourites);
		addToFavourites(info._id);
	};

	useEffect(() => {
		if (userData) {
			const isQuoteInUserFavourites = userData.favourites.find((item) => item === info._id);
			setIsQuoteInFavourites(Boolean(isQuoteInUserFavourites));
		}
	}, [userData, info]);

	return (
		<div style={{ background: `url(${info.anime_bckg}) center` }} className='main-carousel-item'>
			<div className='main-carousel-item-content container'>
				<img className='main-carousel-item-anime-logo' src={info.anime_logo} alt='anime-logo' />
				<QuoteText author={info.character} quote={info.quote} wrapperClass='carousel-quote' />
				<div className='main-carousel-item-btns'>
					<button className='btn see-more' onClick={() => navigate("/selections/" + info.anime)}>
						See more
					</button>
					<button onClick={() => checkUserAuthorized(handleFavourite, isUserLoggedIn)} className='btn btn-icon'>
						<FavoiriteIcon className={isQuoteInFavourites ? "active" : ""} />
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
