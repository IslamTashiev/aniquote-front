import React from "react";
import ContentLoader from "react-content-loader";

import "./_style.scss";

const MainCarouselLoader = () => {
	return (
		<div className='main-carousel-loader-wrapper'>
			<div className='container'>
				<ContentLoader className='skeleton-loader' speed={2} width={"100%"} height={"100%"} backgroundColor='#4b4b4b' foregroundColor='#7d7d7d'>
					<rect x='0' y='0' rx='4' ry='4' width='200' height='100' />
					<rect x='0' y='115' rx='4' ry='4' width='53%' height='18' />
					<rect x='0' y='135' rx='4' ry='4' width='59%' height='18' />
					<rect x='0' y='155' rx='4' ry='4' width='52%' height='18' />
					<rect x='0' y='175' rx='4' ry='4' width='30%' height='18' />
					<rect x='0' y='208' rx='4' ry='4' width='200' height='40' />
					<rect x='204' y='208' rx='4' ry='4' width='40' height='40' />
				</ContentLoader>
			</div>
		</div>
	);
};

export default MainCarouselLoader;
