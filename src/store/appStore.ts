import create from "zustand";

interface AppStore {
	showUnauthorizedModal: boolean;
	checkUserAuthorized: (callback: any, userIsLoggedIn: boolean) => void;
	switchShowUnauthorizedModal: () => void;
}

export const useAppStore = create<AppStore>((set) => {
	return {
		showUnauthorizedModal: false,
		checkUserAuthorized: (callback: any, userIsLoggedIn: boolean) => {
			if (userIsLoggedIn) {
				callback();
			} else {
				set({ showUnauthorizedModal: true });
			}
		},
		switchShowUnauthorizedModal: () => set((state) => ({ showUnauthorizedModal: !state.showUnauthorizedModal })),
	};
});
