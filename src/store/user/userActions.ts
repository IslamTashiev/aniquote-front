import axios from "../../axios";
import { IUserDataRequest } from "../../models";

export const login = async (params: IUserDataRequest) => {
	const { data } = await axios.post("/auth/login", params);
	if (data && "token" in data) {
		localStorage.setItem("token", data.token);
	}
	return data;
};
export const getUserData = async () => {
	const { data } = await axios.get("/auth/me");
	return data;
};
export const register = async (params: IUserDataRequest) => {
	const randomDigit = (max: number) => Math.floor(Math.random() * max).toString();
	const res = randomDigit(2) + randomDigit(5) + randomDigit(7) + randomDigit(6);

	const updatedParams = {
		...params,
		avatar: `https://1avatara.ru/pic/anime/anime${res}.gif`,
	};
	const { data } = await axios.post("/auth/register", updatedParams);
	if (data && "token" in data) {
		localStorage.setItem("token", data.token);
	}
	return data;
};
