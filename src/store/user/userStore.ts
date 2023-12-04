import create from "zustand";
import { IUserDataRequest, IUserDataResponse } from "../../models";
import * as UserActions from "./userActions";

type IUserStore = {
	userData: IUserDataResponse | null;
	login: (params: IUserDataRequest) => void;
	getMe: () => void;
};

const useUserStore = create<IUserStore>((set) => ({
	userData: null,
	login: async (params) => {
		const data = await UserActions.login(params);
		set({ userData: data });
	},
	getMe: async () => {
		const data = await UserActions.getUserData();
		set({ userData: data });
	},
	logout: () => {
		localStorage.removeItem("token");
		set({ userData: null });
	},
}));

export default useUserStore;
