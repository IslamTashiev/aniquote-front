import create from "zustand";
import { IQuoteAuthor, IUserDataRequest } from "../../models";
import * as UserActions from "./userActions";

type IUserStore = {
	userData: IQuoteAuthor | null;
	isUserLoggedIn: boolean;
	login: (params: IUserDataRequest) => void;
	getMe: () => void;
	logout: () => void;
	register: (params: IUserDataRequest) => void;
	addToFavourites: (quoteId: string) => void;
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
	addToFavourites: async (quoteId: string) => {
		const data = await UserActions.addToFavourites(quoteId);
		set({ userData: data });
	},
}));

export default useUserStore;
