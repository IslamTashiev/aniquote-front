import create from "zustand";
import { IUserDataRequest, IUserDataResponse } from "../../models";
import * as UserActions from "./userActions";

type IUserStore = {
	userData: IUserDataResponse | null;
	isUserLoggedIn: boolean;
	login: (params: IUserDataRequest) => void;
	getMe: () => void;
	logout: () => void;
	register: (params: IUserDataRequest) => void;
};

const useUserStore = create<IUserStore>((set) => ({
	userData: null,
	isUserLoggedIn: false,
	login: async (params) => {
		const data = await UserActions.login(params);
		set({ userData: data, isUserLoggedIn: true });
	},
	getMe: async () => {
		const data = await UserActions.getUserData();
		set({ userData: data, isUserLoggedIn: Boolean(data) });
	},
	logout: () => {
		localStorage.removeItem("token");
		set({ userData: null, isUserLoggedIn: false });
	},
	register: async (params: IUserDataRequest) => {
		const data = await UserActions.register(params);
		set({ userData: data, isUserLoggedIn: true });
	},
}));

export default useUserStore;
