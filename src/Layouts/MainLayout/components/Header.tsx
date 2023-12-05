import "./_style.scss";
import { useState } from "react";
import clsx from "clsx";

import { ReactComponent as Logo } from "../../../assets/Logo.svg";
import { ReactComponent as LogoMobile } from "../../../assets/Logo-mobile.svg";
import { Link, useNavigate } from "react-router-dom";
import useUserStore from "../../../store/user/userStore";

const Header = () => {
	const [mobileMenu, setMobileMenu] = useState<boolean>(false);
	const [showUserData, setShowUserData] = useState<boolean>(false);

	const navigate = useNavigate();
	const { userData, isUserLoggedIn, logout } = useUserStore((state) => state);

	const handleSwitchMobileMenuState = () => {
		setMobileMenu(!mobileMenu);
	};

	return (
		<header className='header'>
			<div className='header-content container'>
				<Link to='/'>
					<div className='header-logo'>
						<Logo />
					</div>
				</Link>
				<div className='header-logo-mobile'>
					<LogoMobile />
				</div>
				<div className={clsx("header-menu", { active: mobileMenu })}>
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
				<div className='header-interface'>
					{isUserLoggedIn ? (
						<div onClick={() => setShowUserData(!showUserData)} className='header-interface-user-info'>
							<img className='user-avatar' src={userData?.avatar} alt='user-avatar' />
							<div className='user-data'>
								<span className='user-name'>{userData?.fullName}</span>
								<span className='user-email'>{userData?.email}</span>
							</div>

							<div className={clsx("user-interface", { active: showUserData })}>
								<ul className='user-menu'>
									<li onClick={() => navigate("/favourites")} className='user-menu-item'>
										My favorites
									</li>
									<li onClick={logout} className='user-menu-item logout'>
										Logout
									</li>
								</ul>
							</div>
						</div>
					) : (
						<div className='header-interface-auth'>
							<button onClick={() => navigate("/auth/login")} className='btn btn-text header-interface-auth-login'>
								Login
							</button>
							<button onClick={() => navigate("/auth/register")} className='btn header-interface-auth-signin'>
								Sign up
							</button>
						</div>
					)}
					<div onClick={handleSwitchMobileMenuState} className={clsx("header-interface-menu", { active: mobileMenu })}>
						<span></span>
					</div>
				</div>
			</div>
		</header>
	);
};

export default Header;
