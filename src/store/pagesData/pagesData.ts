import create from "zustand";
import { IMainCarouselData } from "../../models";
import * as PagesDataActions from "./pagesDataActions";

type IPagesData = {
	mainCarouselData: IMainCarouselData[];
	getMainCarouselItems: () => void;
};

const usePagesDataStore = create<IPagesData>((set) => ({
	mainCarouselData: [],
	getMainCarouselItems: async () => set({ mainCarouselData: await PagesDataActions.getMainCarouselItems() }),
}));

export default usePagesDataStore;
