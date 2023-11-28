import React from "react";
import ContentLoader from "react-content-loader";

const CollectionListLoader = () => {
	return (
		<ContentLoader speed={2} width={"100%"} height={150} backgroundColor='#4b4b4b' foregroundColor='#7d7d7d'>
			<rect x='0' y='0' rx='10' ry='10' width='100%' height='150' />
		</ContentLoader>
	);
};

export default CollectionListLoader;
