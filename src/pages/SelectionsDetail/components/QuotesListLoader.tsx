import React from "react";
import ContentLoader from "react-content-loader";

const QuotesListLoader = () => {
	return (
		<ContentLoader speed={2} width={"100%"} height={550} style={{ marginTop: 24 }} backgroundColor='#4b4b4b' foregroundColor='#7d7d7d'>
			<rect x='0' y='0' rx='10' ry='10' width='100%' height={95} />
			<rect x='0' y='112' rx='10' ry='10' width='100%' height={95} />
			<rect x='0' y='224' rx='10' ry='10' width='100%' height={95} />
			<rect x='0' y='336' rx='10' ry='10' width='100%' height={95} />
			<rect x='0' y='448' rx='10' ry='10' width='100%' height={95} />
		</ContentLoader>
	);
};

export default QuotesListLoader;
