import create from "zustand";
import { ICollectionItem, IUserData, IUserDataRequest } from "../../models";
import * as UserActions from "./userActions";

type IUserStore = {
	userData: IUserData | null;
	isUserLoggedIn: boolean;
	favourites: ICollectionItem | null;
	favouritesIsLoaded: boolean;
	login: (params: IUserDataRequest) => void;
	checkAuth: () => void;
	logout: () => void;
	register: (params: IUserDataRequest) => void;
	addToFavourites: (quoteId: string) => void;
	getFavourites: () => void;
};

const useUserStore = create<IUserStore>((set) => ({
	userData: null,
	isUserLoggedIn: false,
	favourites: null,
	favouritesIsLoaded: false,
	login: async (params) => {
		const data = await UserActions.login(params);
		set({ userData: data.user, isUserLoggedIn: true });
	},
	checkAuth: async () => {
		const data = await UserActions.checkAuth();
		set({ userData: data.user, isUserLoggedIn: Boolean(data.user) });
	},
	logout: async () => {
		await UserActions.logout();
		set({ userData: null, isUserLoggedIn: false });
	},
	register: async (params: IUserDataRequest) => {
		const data = await UserActions.register(params);
		set({ userData: data.user, isUserLoggedIn: true });
	},
	addToFavourites: async (quoteId: string) => {
		const data = await UserActions.addToFavourites(quoteId);
		set({ userData: data });
	},
	getFavourites: async () => {
		set({ favouritesIsLoaded: false });
		const data = await UserActions.getFavourites();
		set({ favourites: data, favouritesIsLoaded: true });
	},
}));

export default useUserStore;
