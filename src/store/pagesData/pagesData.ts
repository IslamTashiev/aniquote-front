import create from "zustand";
import { IAnimeCard, ICollectionItem, IMainCarouselData } from "../../models";
import * as PagesDataActions from "./pagesDataActions";

type IPagesData = {
	mainCarouselData: IMainCarouselData[];
	mainCarouselDataIsLoaded: boolean;
	animeCards: IAnimeCard[];
	animeCardsIsLoaded: boolean;
	collectionData: ICollectionItem[];
	collectionDataIsLoaded: boolean;
	collectionDetailData: ICollectionItem[];
	collectionDetailDataIsLoaded: boolean;
	loadedCollectionPages: number | null;
	foundedTitles: ICollectionItem[];
	titlesIsLoaded: boolean;
	getMainCarouselItems: () => void;
	getAnimeCards: () => void;
	getCollectionDetailData: (animeTitle: string) => void;
	getCollectionData: (page: number) => void;
	searchByTitle: (title: string) => void;
	clearTitles: () => void;
};

const usePagesDataStore = create<IPagesData>((set, get) => ({
	mainCarouselData: [],
	mainCarouselDataIsLoaded: false,
	animeCards: [],
	animeCardsIsLoaded: false,
	collectionData: [],
	collectionDataIsLoaded: false,
	collectionDetailData: [],
	collectionDetailDataIsLoaded: false,
	loadedCollectionPages: null,
	foundedTitles: [],
	titlesIsLoaded: false,
	getMainCarouselItems: async () => {
		const { mainCarouselData } = get();
		set({ mainCarouselDataIsLoaded: Boolean(mainCarouselData.length) });
		const data = await PagesDataActions.getMainCarouselItems();
		const isDataEqual = JSON.stringify(mainCarouselData) === JSON.stringify(data);

		if (data.length && !isDataEqual) {
			set({ mainCarouselDataIsLoaded: true });
			set({ mainCarouselData: data });
		}
	},
	getAnimeCards: async () => {
		const { animeCards } = get();
		set({ animeCardsIsLoaded: Boolean(animeCards.length) });
		const data = await PagesDataActions.getAnimeCards();
		const isDataEqual = JSON.stringify(animeCards) === JSON.stringify(data);

		if (data.length && !isDataEqual) {
			set({ animeCardsIsLoaded: true });
			set({ animeCards: data });
		}
	},
	getCollectionData: async (page) => {
		set({ collectionDataIsLoaded: false });
		const data = await PagesDataActions.getCollections(page);

		if (data) {
			const { collectionData } = get();
			const uniqueData = data.filter((newItem) => {
				return !collectionData.some((existingItem) => existingItem._id === newItem._id);
			});

			set((state) => ({ collectionData: [...state.collectionData, ...uniqueData], loadedCollectionPages: page }));
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
	searchByTitle: async (title: string) => {
		set({ titlesIsLoaded: false });
		const data = await PagesDataActions.searchByTitle(title);
		set({ foundedTitles: data, titlesIsLoaded: true });
	},
	clearTitles: () => set({ foundedTitles: [] }),
}));

export default usePagesDataStore;
