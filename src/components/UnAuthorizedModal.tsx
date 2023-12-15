import React from "react";
import { Link } from "react-router-dom";
import Modal from "./modal";
import modalImage from "../assets/Auth-girl.png";
import { useAppStore } from "../store/appStore";

import "./_style.scss";

const UnAuthorizedModal = () => {
	const { showUnauthorizedModal, switchShowUnauthorizedModal } = useAppStore((state) => state);

	return (
		<Modal contentClasses='unauthorized-modal-content' isActive={showUnauthorizedModal} onChangeActiveState={switchShowUnauthorizedModal}>
			<div className='unauthorized-modal'>
				<h3>Log in to your account</h3>
				<p>
					<span onClick={switchShowUnauthorizedModal}>
						<Link to='/auth/login'>Log in </Link>
					</span>
					or
					<span onClick={switchShowUnauthorizedModal}>
						<Link to='/auth/register'> create </Link>
					</span>
					an account to add a review
				</p>
				<img src={modalImage} alt='auth-girl' />
			</div>
		</Modal>
	);
};

export default UnAuthorizedModal;
