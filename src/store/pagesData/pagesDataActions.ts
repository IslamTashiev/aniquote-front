import axios from "../../axios";
import { IAnimeCard, ICollectionItem, IMainCarouselData } from "../../models";

export const getMainCarouselItems = async () => {
	const { data } = await axios("/carousel-items");
	return data as IMainCarouselData[];
};
export const getAnimeCards = async () => {
	const { data } = await axios("/anime-cards");
	return data as IAnimeCard[];
};
export const getCollections = async (page: number) => {
	const { data } = await axios("/quotes/anime-quotes", {
		params: {
			page,
			limit: 8,
		},
	});
	return data.docs as ICollectionItem[];
};
export const getCollectionsDetail = async (animeTitle: string) => {
	const { data } = await axios.post("/quotes/anime", { animeTitle });
	return data as ICollectionItem;
};
export const searchByTitle = async (title: string) => {
	const { data } = await axios("/quotes/search-anime", { params: { title } });
	return data as ICollectionItem[];
};
