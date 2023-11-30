import React from "react";
import Modal from "../../../components/modal";
import { ReactComponent as CloseIcon } from "../../../assets/Close.svg";
import Input from "../../../ui/Input";

interface CollectionSearchModalProps {
	isActive: boolean;
	onChangeActiveState: () => void;
}

const CollectionSearchModal = ({ isActive, onChangeActiveState }: CollectionSearchModalProps) => {
	return (
		<Modal isActive={isActive} onChangeActiveState={onChangeActiveState}>
			<div className='collection-modal-header'>
				<h3 className='collection-modal-title'>Search for your title</h3>
				<div onClick={onChangeActiveState} className='collection-modal-close-icon'>
					<CloseIcon />
				</div>
			</div>
			<div className='collection-modal-form'>
				<Input inputStyles='collection-modal-input' label='' onChangeValue={() => {}} placeholder='Naruto Shippuden' type='text' />
				<ul className='collection-modal-dropped-menu dropped'>
					<li>Lorem ipsum dolor sit.</li>
					<li>Lorem ipsum sit.</li>
					<li>Lorem ipsum dolor.</li>
				</ul>
			</div>
		</Modal>
	);
};

export default CollectionSearchModal;
