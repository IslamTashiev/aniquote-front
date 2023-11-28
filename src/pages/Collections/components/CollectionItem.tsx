import React from "react";
import { ICollectionItem } from "../../../models";
import { useNavigate } from "react-router-dom";

interface CollectionItemProps {
	info: ICollectionItem;
}

const CollectionItem = ({ info }: CollectionItemProps) => {
	const navigate = useNavigate();
	return (
		<div className='collection-item' onClick={() => navigate("/selections/" + info.anime)}>
			<img src={info.anime_image[1]} alt='anime' />
			<div className='collection-item-content'>{info.anime}</div>
		</div>
	);
};

export default CollectionItem;
