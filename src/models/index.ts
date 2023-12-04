export interface IMainCarouselData {
	anime: string;
	quote: string;
	character: string;
	anime_logo: string;
	anime_bckg: string;
	_id: string;
}
export interface IQuote {
	_id: string;
	quote: string;
	character: string;
	anime: string;
}
export interface IAnimeCard {
	_id: string;
	anime_bckg: string;
	anime: string;
	quotes: IQuote[];
}
export interface ICollectionItem {
	_id: string;
	anime: string;
	anime_image: string[];
	quotes: IQuote[];
}
export interface ICollectionData {
	docs: ICollectionItem[];
	total: number;
	limit: string;
	page: string;
	pages: number;
}

export interface IUserDataResponse {
	_id: string;
	email: string;
	fullName: string;
}
export interface IUserDataRequest {
	email: string;
	password: string;
	fullName?: string;
}
