import create from "zustand";
import { IMainCarouselData } from "../../models";
import * as PagesDataActions from "./pagesDataActions";

type IPagesData = {
	mainCarouselData: IMainCarouselData[];
	getMainCarouselItems: () => void;
	mainCarouselDataIsLoaded: boolean;
};

const usePagesDataStore = create<IPagesData>((set) => ({
	mainCarouselData: [],
	mainCarouselDataIsLoaded: false,
	getMainCarouselItems: async () => {
		set({ mainCarouselDataIsLoaded: false });
		const data = await PagesDataActions.getMainCarouselItems();

		if (data.length) {
			set({ mainCarouselDataIsLoaded: true });
			set({ mainCarouselData: data });
		}
	},
}));

export default usePagesDataStore;
