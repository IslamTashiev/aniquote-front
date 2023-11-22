import create from "zustand";
import { IAnimeCard, ICollectionData, IMainCarouselData } from "../../models";
import * as PagesDataActions from "./pagesDataActions";

type IPagesData = {
	mainCarouselData: IMainCarouselData[];
	mainCarouselDataIsLoaded: boolean;
	animeCards: IAnimeCard[];
	animeCardsIsLoaded: boolean;
	collectionData: ICollectionData | null;
	collectionDataIsLoaded: boolean;
	getMainCarouselItems: () => void;
	getAnimeCards: () => void;
};

const usePagesDataStore = create<IPagesData>((set) => ({
	mainCarouselData: [],
	mainCarouselDataIsLoaded: false,
	animeCards: [],
	animeCardsIsLoaded: false,
	collectionData: null,
	collectionDataIsLoaded: false,
	getMainCarouselItems: async () => {
		set({ mainCarouselDataIsLoaded: false });
		const data = await PagesDataActions.getMainCarouselItems();

		if (data.length) {
			set({ mainCarouselDataIsLoaded: true });
			set({ mainCarouselData: data });
		}
	},
	getAnimeCards: async () => {
		set({ animeCardsIsLoaded: false });
		const data = await PagesDataActions.getAnimeCards();

		if (data.length) {
			set({ animeCardsIsLoaded: true });
			set({ animeCards: data });
		}
	},
	getCollectionData: async () => {
		set({ collectionDataIsLoaded: false });
		const data = await PagesDataActions.getCollections();

		if (data) {
			set({ collectionData: data });
			set({ collectionDataIsLoaded: true });
		}
	},
}));

export default usePagesDataStore;
