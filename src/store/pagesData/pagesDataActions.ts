import axios from "axios";
import { IAnimeCard, ICollectionData, IMainCarouselData } from "../../models";

const API_URL = process.env.REACT_APP_API_URL || "http://localhost:5000/";

export const getMainCarouselItems = async () => {
	const { data } = await axios(API_URL + "carousel-items");
	return data as IMainCarouselData[];
};
export const getAnimeCards = async () => {
	const { data } = await axios(API_URL + "anime-cards");
	return data as IAnimeCard[];
};
export const getCollections = async () => {
	const { data } = await axios(API_URL + "anime-quotes");
	return data as ICollectionData;
};
