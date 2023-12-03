import React from "react";
import ContentLoader from "react-content-loader";

const QuotesListLoader = () => {
	return (
		<ContentLoader speed={2} width={"100%"} height={850} backgroundColor='#4b4b4b' foregroundColor='#7d7d7d'>
			<rect x='0' y='0' rx='10' ry='10' width='350' height={24} />
			<rect x='0' y='48' rx='10' ry='10' width='140' height={24} />

			{[...new Array(5)].map((_, index) => (
				<rect x='0' y={60 * index + 84 + index * 12} rx='10' ry='10' width='100%' height={60} />
			))}

			<rect x='0' y='456' rx='10' ry='10' width='140' height={24} />

			{[...new Array(5)].map((_, index) => (
				<rect x='0' y={60 * index + 492 + index * 12} rx='10' ry='10' width='100%' height={60} />
			))}
		</ContentLoader>
	);
};

export default QuotesListLoader;
