import create from "zustand";
import { IUserDataRequest, IUserDataResponse } from "../../models";
import * as UserActions from "./userActions";

type IUserStore = {
	userData: IUserDataResponse | null;
	login: (params: IUserDataRequest) => void;
};

const useUserStore = create<IUserStore>((set) => ({
	userData: null,
	login: async (params) => {
		const data = await UserActions.login(params);
		set({ userData: data });
	},
}));

export default useUserStore;
