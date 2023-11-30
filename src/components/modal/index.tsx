import clsx from "clsx";

import "./_style.scss";
import { useEffect } from "react";

interface ModalProps {
	children: JSX.Element | JSX.Element[] | string | string[];
	wrapperClasses?: string;
	contentClasses?: string;
	isActive: boolean;
	onChangeActiveState: () => void;
}

const Modal = ({ children, wrapperClasses, contentClasses, isActive, onChangeActiveState }: ModalProps) => {
	useEffect(() => {
		if (isActive) {
			document.body.style.overflow = "hidden";
		} else {
			document.body.style.overflow = "visible";
		}

		return () => {
			document.body.style.overflow = "visible";
		};
	}, [isActive]);

	return (
		<div className={clsx("modal-wrapper", { active: isActive }, wrapperClasses ?? "")}>
			<div className='modal-close' onClick={onChangeActiveState}></div>
			<div className={clsx("modal-content", contentClasses ?? "")}>{children}</div>
		</div>
	);
};

export default Modal;
