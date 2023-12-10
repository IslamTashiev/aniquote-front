import React from "react";
import ContentLoader from "react-content-loader";

const CollectionListLoader = () => {
	return (
		<ContentLoader className='collection-loader-item' speed={2} width={"100%"} backgroundColor='#4b4b4b' foregroundColor='#7d7d7d'>
			<rect x='0' y='0' rx='10' ry='10' width='100%' />
		</ContentLoader>
	);
};

export default CollectionListLoader;
