import axios from "axios";
import { IMainCarouselData } from "../../models";

const API_URL = process.env.REACT_APP_API_URL || "http://localhost:5000/";

export const getMainCarouselItems = async () => {
	const { data } = await axios(API_URL + "carousel-items");
	return data as IMainCarouselData[];
};
