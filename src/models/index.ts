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
