import "./_style.scss";
import { useState } from "react";
import clsx from "clsx";

import { ReactComponent as Logo } from "../../../assets/Logo.svg";
import { ReactComponent as LogoMobile } from "../../../assets/Logo-mobile.svg";
import { ReactComponent as FavoiriteIcon } from "../../../assets/Favoirite.svg";
import { ReactComponent as CloseIcon } from "../../../assets/Close.svg";
import { Link, useNavigate } from "react-router-dom";
import useUserStore from "../../../store/user/userStore";
import Input from "../../../ui/Input";

const Header = () => {
	const [mobileMenu, setMobileMenu] = useState<boolean>(false);

	const navigate = useNavigate();
	const { userData, isUserLoggedIn, logout } = useUserStore((state) => state);

	const handleSwitchMobileMenuState = () => {
		setMobileMenu(!mobileMenu);
	};

	const renderAuthButtons = (
		<div className='header-interface-auth'>
			<button onClick={() => navigate("/auth/login")} className='btn btn-text header-interface-auth-login'>
				Login
			</button>
			<button onClick={() => navigate("/auth/register")} className='btn header-interface-auth-signin'>
				Sign up
			</button>
		</div>
	);
	const renderAuthLoggedIn = (
		<div className='header-interface-user-info'>
			<img className='user-avatar' src={userData?.avatar} alt='user-avatar' />
			<button onClick={() => navigate("/favourites")} className='btn btn-text favourite-btn'>
				<span className='btn-counter'>{userData?.favourites.length}</span>
				<FavoiriteIcon />
			</button>
			<button onClick={logout} className='btn btn-text'>
				Logout
			</button>
		</div>
	);

	return (
		<header className='header'>
			<div className='header-content container'>
				<Link to='/'>
					<div className='header-logo'>
						<Logo />
					</div>
					<div className='header-logo-mobile'>
						<LogoMobile />
					</div>
				</Link>
				<div className={clsx("header-menu", { active: mobileMenu })}>
					<div className='header-menu-content'>
						<div className='header-menu-search'>
							<Input label='' onChangeValue={() => {}} placeholder='Searching for...' type='text' />
							<button className='btn'>
								<CloseIcon />
							</button>
						</div>
						<ul className='header-menu-list'>
							<li className='header-menu-list-item'>
								<Link to='/about-us'>About us</Link>
							</li>
							<li className='header-menu-list-item'>
								<Link to='/news'>News</Link>
							</li>
							<li className='header-menu-list-item'>
								<Link to='/collection'>Collection</Link>
							</li>
						</ul>
					</div>
					{renderAuthButtons}
				</div>
				<div className='header-interface'>
					{isUserLoggedIn ? renderAuthLoggedIn : renderAuthButtons}
					<div onClick={handleSwitchMobileMenuState} className={clsx("header-interface-menu", { active: mobileMenu })}>
						<span></span>
					</div>
				</div>
			</div>
		</header>
	);
};

export default Header;
