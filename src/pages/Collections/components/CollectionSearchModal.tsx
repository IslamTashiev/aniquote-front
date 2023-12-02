import React, { useState, useEffect } from "react";
import Modal from "../../../components/modal";
import Input from "../../../ui/Input";
import useDebounce from "../../../hooks/useDebounce";
import { ReactComponent as CloseIcon } from "../../../assets/Close.svg";
import { ReactComponent as HistoryIcon } from "../../../assets/History.svg";
import usePagesDataStore from "../../../store/pagesData/pagesData";
import { useNavigate } from "react-router-dom";
import { ICollectionItem } from "../../../models";
import CollectionModalListLoader from "./CollectionModalListLoader";

interface CollectionSearchModalProps {
	isActive: boolean;
	onChangeActiveState: () => void;
}

const CollectionSearchModal = ({ isActive, onChangeActiveState }: CollectionSearchModalProps) => {
	const [searchText, setSearchText] = useState<string>("");
	const [history, setHistory] = useState<ICollectionItem[]>([]);
	const [historyIsEmpty, setHistoryIsEmpty] = useState<boolean>(false);
	const [showHistory, setShowHistory] = useState<boolean>(false);
	const { debounceValue, setActualValue } = useDebounce("", 1000);

	const { searchByTitle, foundedTitles, clearTitles, titlesIsLoaded } = usePagesDataStore((state) => state);
	const navigate = useNavigate();

	const handleCloseModal = () => {
		onChangeActiveState();
		clearInput();
	};
	const clearInput = () => {
		setSearchText("");
		setActualValue("");
		clearTitles();
	};
	const handleClickFoundedElem = (item: ICollectionItem) => {
		navigate("/selections/" + item.anime);
		clearTitles();

		const history = localStorage.getItem("searchHistory");

		if (!history) {
			localStorage.setItem("searchHistory", JSON.stringify([item]));
			return;
		}

		const parsedHistory = JSON.parse(history) as ICollectionItem[];
		const filteredHistory = parsedHistory.filter((filteredItem) => filteredItem._id !== item._id);
		const mergedHistory = [...filteredHistory, item];
		localStorage.setItem("searchHistory", JSON.stringify(mergedHistory));
	};
	const handleGetHistory = () => {
		toggleShowHistory();
		getHistory();
	};
	const getHistory = () => {
		if (!showHistory) {
			const history = localStorage.getItem("searchHistory");

			if (!history) {
				setHistoryIsEmpty(true);
				return;
			}

			const parsedHistory = JSON.parse(history);
			setHistory(parsedHistory);
			setHistoryIsEmpty(false);
		} else {
			setHistory([]);
		}
	};
	const toggleShowHistory = () => setShowHistory(!showHistory);

	const renderList = (list: ICollectionItem[]) => (
		<ul className='collection-modal-dropped-menu' style={{ height: list.length * 40 }}>
			{list.map((item) => (
				<li onClick={() => handleClickFoundedElem(item)} key={item._id}>
					{item.anime}
				</li>
			))}
		</ul>
	);

	useEffect(() => {
		setActualValue(searchText);
	}, [searchText, setActualValue]);

	useEffect(() => {
		if (debounceValue) {
			searchByTitle(debounceValue);
		}
	}, [debounceValue, searchByTitle]);

	return (
		<Modal isActive={isActive} onChangeActiveState={handleCloseModal}>
			<div className='collection-modal-header'>
				<h3 className='collection-modal-title'>Find your title</h3>
				<div onClick={handleCloseModal} className='collection-modal-close-icon'>
					<CloseIcon />
				</div>
			</div>
			<div className='collection-modal-form'>
				<div className='collection-modal-form-content'>
					<Input inputStyles='collection-modal-input' value={searchText} label='' onChangeValue={(value) => setSearchText(value)} placeholder='Naruto Shippuden' type='text' />
					<button onClick={clearInput} className='collection-modal-btn btn'>
						<CloseIcon width={18} height={18} />
					</button>
					<button onClick={handleGetHistory} className='collection-modal-btn btn'>
						<HistoryIcon />
					</button>
				</div>
				{titlesIsLoaded ? renderList(foundedTitles) : debounceValue ? <CollectionModalListLoader /> : null}
				<div className='collection-modal-history'>
					{showHistory ? <h4 className='collection-modal-history-title'>{historyIsEmpty ? "Your histry is empty" : "History"}</h4> : null}
					{renderList(history)}
				</div>
			</div>
		</Modal>
	);
};

export default CollectionSearchModal;
