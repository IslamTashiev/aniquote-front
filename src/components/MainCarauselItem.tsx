import carouselLogo from "../assets/Carousel-item-logo.png";
import { ReactComponent as FavoiriteIcon } from "../assets/Favoirite.svg";
import QuoteText from "./QuoteText";
// import carouselBckg from "../assets/Carousel-item-bckg.png";

import "./_style.scss";

interface MainCarauselItemProps {}

const MainCarauselItem = ({}: MainCarauselItemProps) => {
	return (
		<div className='main-carousel-item'>
			<div className='main-carousel-item-content container'>
				<img className='main-carousel-item-anime-logo' src={carouselLogo} alt='anime-logo' />
				<QuoteText
					author='Jiraya'
					quote='It seems like the small leaves in the Village of Konoha have inherited that \"will of fire\" you spoke of, Third. The fire on the leaves will eventually burn greater and stronger... It will flash its light and protect this village.'
					wrapperClass='carousel-quote'
				/>
				<div className='main-carousel-item-btns'>
					<button className='btn see-more'>See more</button>
					<button className='btn btn-icon'>
						<FavoiriteIcon />
					</button>
				</div>
			</div>
		</div>
	);
};

export default MainCarauselItem;
