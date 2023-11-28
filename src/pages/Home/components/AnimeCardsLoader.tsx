import React from "react";
import ContentLoader from "react-content-loader";

const AnimeCardsLoader = () => {
	return (
		<ContentLoader speed={2} width={"100%"} height={420} backgroundColor='#4b4b4b' foregroundColor='#7d7d7d'>
			<rect x='0' y='0' rx='4' ry='4' width='270' height='30' />
			<rect x='0' y='40' rx='4' ry='4' width='350' height='15' />
			{[...new Array(5)].map((_, index) => (
				<rect key={Math.random() + Math.random()} x={(1200 / 5) * index} y='70' rx='10' ry='10' width={1200 / 5 - 15} height='350' />
			))}
		</ContentLoader>
	);
};

export default AnimeCardsLoader;
