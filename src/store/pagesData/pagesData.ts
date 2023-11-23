import create from "zustand";
import { IAnimeCard, ICollectionData, ICollectionItem, IMainCarouselData } from "../../models";
import * as PagesDataActions from "./pagesDataActions";

type IPagesData = {
	mainCarouselData: IMainCarouselData[];
	mainCarouselDataIsLoaded: boolean;
	animeCards: IAnimeCard[];
	animeCardsIsLoaded: boolean;
	collectionData: ICollectionData | null;
	collectionDataIsLoaded: boolean;
	collectionDetailData: ICollectionItem[];
	collectionDetailDataIsLoaded: boolean;
	getMainCarouselItems: () => void;
	getAnimeCards: () => void;
	getCollectionDetailData: (animeTitle: string) => void;
};

const usePagesDataStore = create<IPagesData>((set) => ({
	mainCarouselData: [],
	mainCarouselDataIsLoaded: false,
	animeCards: [],
	animeCardsIsLoaded: false,
	collectionData: null,
	collectionDataIsLoaded: false,
	collectionDetailData: [],
	collectionDetailDataIsLoaded: false,
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
	getCollectionDetailData: async (animeTitle: string) => {
		set({ collectionDetailDataIsLoaded: false });
		const data = await PagesDataActions.getCollectionsDetail(animeTitle);

		if (data) {
			set({ collectionDetailData: data });
			set({ collectionDetailDataIsLoaded: true });
		}
	},
}));

export default usePagesDataStore;
