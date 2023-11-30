import React, { useState, useEffect } from "react";
import Modal from "../../../components/modal";
import Input from "../../../ui/Input";
import useDebounce from "../../../hooks/useDebounce";
import { ReactComponent as CloseIcon } from "../../../assets/Close.svg";
import usePagesDataStore from "../../../store/pagesData/pagesData";
import { useNavigate } from "react-router-dom";

interface CollectionSearchModalProps {
	isActive: boolean;
	onChangeActiveState: () => void;
}

const CollectionSearchModal = ({ isActive, onChangeActiveState }: CollectionSearchModalProps) => {
	const [searchText, setSearchText] = useState<string>("");
	const { debounceValue, setActualValue } = useDebounce("", 2000);

	const { searchByTitle, foundedTitles } = usePagesDataStore((state) => state);
	const navigate = useNavigate();

	useEffect(() => {
		setActualValue(searchText);
	}, [searchText, setActualValue]);

	useEffect(() => {
		if (debounceValue) {
			searchByTitle(debounceValue);
		}
	}, [debounceValue, searchByTitle]);

	return (
		<Modal isActive={isActive} onChangeActiveState={onChangeActiveState}>
			<div className='collection-modal-header'>
				<h3 className='collection-modal-title'>Search for your title</h3>
				<div onClick={onChangeActiveState} className='collection-modal-close-icon'>
					<CloseIcon />
				</div>
			</div>
			<div className='collection-modal-form'>
				<Input inputStyles='collection-modal-input' value={searchText} label='' onChangeValue={(value) => setSearchText(value)} placeholder='Naruto Shippuden' type='text' />
				<ul className='collection-modal-dropped-menu' style={{ height: foundedTitles.length * 40 }}>
					{foundedTitles.map((item) => (
						<li onClick={() => navigate("/selections/" + item.anime)} key={item._id}>
							{item.anime}
						</li>
					))}
				</ul>
			</div>
		</Modal>
	);
};

export default CollectionSearchModal;
