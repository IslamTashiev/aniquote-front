import React from "react";
import ContentLoader from "react-content-loader";

const AnimeCardsLoader = () => {
	return (
		<ContentLoader speed={2} width={"100%"} height={330} style={{ marginTop: 24 }} backgroundColor='#4b4b4b' foregroundColor='#7d7d7d'>
			<rect x='0' y='0' rx='10' ry='10' width='230' height='100%' />
			<rect x='245' y='0' rx='10' ry='10' width='230' height='100%' />
			<rect x='490' y='0' rx='10' ry='10' width='230' height='100%' />
			<rect x='735' y='0' rx='10' ry='10' width='230' height='100%' />
			<rect x='980' y='0' rx='10' ry='10' width='230' height='100%' />
		</ContentLoader>
	);
};

export default AnimeCardsLoader;
