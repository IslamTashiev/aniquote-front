import "./_style.scss";
import { useEffect, useState } from "react";
import clsx from "clsx";

import { ReactComponent as Logo } from "../../../assets/Logo.svg";
import { ReactComponent as LogoMobile } from "../../../assets/Logo-mobile.svg";
import { ReactComponent as FavoiriteIcon } from "../../../assets/Favoirite.svg";
import { ReactComponent as CloseIcon } from "../../../assets/Close.svg";
import { Link, useNavigate } from "react-router-dom";
import useUserStore from "../../../store/user/userStore";
import Input from "../../../ui/Input";

const menuItem = [
	{
		id: 1,
		title: "About us",
		link: "/about-us",
	},
	{
		id: 2,
		title: "News",
		link: "/news",
	},
	{
		id: 3,
		title: "Collection",
		link: "/collection",
	},
];

const Header = () => {
	const [mobileMenu, setMobileMenu] = useState<boolean>(false);
	const [menuItems, setMenuItems] = useState(menuItem);

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

	useEffect(() => {
		if (mobileMenu) {
			document.body.style.overflow = "hidden";
		} else {
			document.body.style.overflow = "visible";
		}

		return () => {
			document.body.style.overflow = "visible";
		};
	}, [mobileMenu]);
	useEffect(() => {
		if (isUserLoggedIn) {
			setMenuItems((prevState) => [
				...prevState,
				{
					id: 4,
					title: "Favourite",
					link: "/favourites",
				},
			]);
		} else {
			setMenuItems((prevState) => prevState.filter((item) => item.id !== 4));
		}
	}, [isUserLoggedIn]);

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
							{menuItems.map((item) => (
								<li key={item.id} className='header-menu-list-item'>
									<Link to={item.link}>{item.title}</Link>
								</li>
							))}
						</ul>
					</div>
					{isUserLoggedIn ? (
						<div className='header-interface-auth'>
							<button onClick={logout} className='btn btn-text'>
								Logout
							</button>
						</div>
					) : (
						renderAuthButtons
					)}
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
