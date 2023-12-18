import axios from "../../axios";
import originalAxios from "axios";
import { IUserDataRequest } from "../../models";

export const login = async (params: IUserDataRequest) => {
	const { data } = await axios.post("/user/login", params);
	if (data && "accessToken" in data) {
		localStorage.setItem("token", data.accessToken);
	}
	return data;
};
export const register = async (params: IUserDataRequest) => {
	const { data } = await axios.post("/user/registration", params);
	if (data && "accessToken" in data) {
		localStorage.setItem("token", data.accessToken);
	}
	return data;
};
export const addToFavourites = async (quoteId: string) => {
	const { data } = await axios.post("/add-to-favourites", { quoteId });
	return data;
};
export const getFavourites = async () => {
	const { data } = await axios.get("/quotes/my-favourites");
	return data;
};
export const checkAuth = async () => {
	const { data } = await originalAxios.get(process.env.REACT_APP_API_URL + "user/refresh", { withCredentials: true });
	if (data && "accessToken" in data) {
		localStorage.setItem("token", data.accessToken);
	}
	return data;
};
export const logout = async () => {
	const { data } = await axios.post("/user/logout");
	localStorage.removeItem("token");
	return data;
};
