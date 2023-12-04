import axios from "../../axios";
import { IUserDataRequest } from "../../models";

export const login = async (params: IUserDataRequest) => {
	const { data } = await axios.post("/auth/login", params);
	if (data && "token" in data) {
		localStorage.setItem("token", data.token);
	}
	return data;
};
