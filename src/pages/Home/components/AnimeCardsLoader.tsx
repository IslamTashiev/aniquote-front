import React from "react";
import ContentLoader from "react-content-loader";

const AnimeCardsLoader = () => {
	return (
		<ContentLoader speed={2} width={"100%"} height={410} style={{ marginTop: 24 }} backgroundColor='#4b4b4b' foregroundColor='#7d7d7d'>
			<rect x='0' y='0' rx='10' ry='10' width='300' height='100%' />
			<rect x='315' y='0' rx='10' ry='10' width='300' height='100%' />
			<rect x='630' y='0' rx='10' ry='10' width='300' height='100%' />
			<rect x='945' y='0' rx='10' ry='10' width='300' height='100%' />
		</ContentLoader>
	);
};

export default AnimeCardsLoader;
