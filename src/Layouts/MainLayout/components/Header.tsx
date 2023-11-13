import "./_style.scss";
import { useState } from "react";
import clsx from "clsx";

import { ReactComponent as Logo } from "../../../assets/Logo.svg";
import { ReactComponent as LogoMobile } from "../../../assets/Logo-mobile.svg";

const Header = () => {
	const [mobileMenu, setMobileMenu] = useState<boolean>(false);

	const handleSwitchMobileMenuState = () => {
		setMobileMenu(!mobileMenu);
	};

	return (
		<header className='header'>
			<div className='header-content container'>
				<div className='header-logo'>
					<Logo />
				</div>
				<div className='header-logo-mobile'>
					<LogoMobile />
				</div>
				<div className={clsx("header-menu", { active: mobileMenu })}>
					<ul className='header-menu-list'>
						<li className='header-menu-list-item'>About us</li>
						<li className='header-menu-list-item'>News</li>
						<li className='header-menu-list-item'>Collection</li>
					</ul>
				</div>
				<div className='header-interface'>
					<div className='header-interface-auth'>
						<button className='btn btn-text header-interface-auth-login'>Login</button>
						<button className='btn header-interface-auth-signin'>Sign up</button>
					</div>
					<div
						onClick={handleSwitchMobileMenuState}
						className={clsx("header-interface-menu", { active: mobileMenu })}
					>
						<span></span>
					</div>
				</div>
			</div>
		</header>
	);
};

export default Header;