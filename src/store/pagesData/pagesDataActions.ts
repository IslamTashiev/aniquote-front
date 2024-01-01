import axios from "../../axios";
import { IAnimeCard, ICollectionItem, IMainPosterItem } from "../../models";

export const getMainPosters = async () => {
	const { data } = await axios("/posters");
	return data as IMainPosterItem[];
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
