import create from "zustand";
import { IAnimeCard, ICollectionItem, IMainPosterItem } from "../../models";
import * as PagesDataActions from "./pagesDataActions";

type IPagesData = {
	mainPosters: IMainPosterItem[];
	isMainPostersLoaded: boolean;
	animeCards: IAnimeCard[];
	animeCardsIsLoaded: boolean;
	collectionData: ICollectionItem[];
	collectionDataIsLoaded: boolean;
	collectionDetailData: ICollectionItem | null;
	collectionDetailDataIsLoaded: boolean;
	loadedCollectionPages: number | null;
	foundedTitles: ICollectionItem[];
	titlesIsLoaded: boolean;
	getMainPosters: () => void;
	getAnimeCards: () => void;
	getCollectionDetailData: (animeTitle: string) => void;
	getCollectionData: (page: number) => void;
	searchByTitle: (title: string) => void;
	clearTitles: () => void;
};

const usePagesDataStore = create<IPagesData>((set, get) => ({
	mainPosters: [],
	isMainPostersLoaded: false,
	animeCards: [],
	animeCardsIsLoaded: false,
	collectionData: [],
	collectionDataIsLoaded: false,
	collectionDetailData: null,
	collectionDetailDataIsLoaded: false,
	loadedCollectionPages: null,
	foundedTitles: [],
	titlesIsLoaded: false,
	getMainPosters: async () => {
		const { mainPosters } = get();
		set({ isMainPostersLoaded: Boolean(mainPosters.length) });
		const data = await PagesDataActions.getMainPosters();
		const isDataEqual = JSON.stringify(mainPosters) === JSON.stringify(data);

		if (data.length && !isDataEqual) {
			set({ isMainPostersLoaded: true });
			set({ mainPosters: data });
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
