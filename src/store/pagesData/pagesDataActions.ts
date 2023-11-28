import axios from "axios";
import { IAnimeCard, ICollectionItem, IMainCarouselData } from "../../models";

const API_URL = process.env.REACT_APP_API_URL || "http://localhost:5000/";

export const getMainCarouselItems = async () => {
	const { data } = await axios(API_URL + "carousel-items");
	return data as IMainCarouselData[];
};
export const getAnimeCards = async () => {
	const { data } = await axios(API_URL + "anime-cards");
	return data as IAnimeCard[];
};
export const getCollections = async (page: number) => {
	const { data } = await axios(API_URL + "anime-quotes", {
		params: {
			page,
			limit: 8,
		},
	});
	return data.docs as ICollectionItem[];
};
export const getCollectionsDetail = async (animeTitle: string) => {
	const { data } = await axios.post(API_URL + "anime", { animeTitle });
	return data as ICollectionItem[];
};
