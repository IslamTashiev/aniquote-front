import "./_style.scss";
import React, { useEffect, useRef, useState } from "react";
import clsx from "clsx";

import { ReactComponent as Logo } from "../../../assets/Logo.svg";
// import { ReactComponent as LogoMobile } from "../../../assets/Logo-mobile.svg";
import { ReactComponent as CloseIcon } from "../../../assets/Close.svg";
import { Link, useLocation, useNavigate } from "react-router-dom";
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

	const location = useLocation();
	const headerRef = useRef<HTMLElement>(null);
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
	useEffect(() => {
		let lastScroll = 0;
		document.addEventListener("scroll", () => {
			const currentScroll = window.pageYOffset || document.documentElement.scrollTop;

			if (currentScroll > lastScroll && headerRef.current) {
				headerRef.current.style.top = `-${headerRef.current.offsetHeight}px`;
			} else if (headerRef.current) {
				headerRef.current.style.top = "0";
			}
			lastScroll = currentScroll <= 0 ? 0 : currentScroll;
		});
		document.body.style.paddingTop = `${headerRef?.current?.offsetHeight}px` ?? "0";

		return () => {
			document.body.style.paddingTop = "0";
		};
	}, []);

	return (
		<header ref={headerRef} className='header'>
			<div className='header-content container'>
				<Link to='/'>
					<div className='header-logo'>
						<Logo />
					</div>
					<div className='header-logo-mobile'>
						<Logo />
						{/* <LogoMobile /> */}
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
								<Link to={item.link}>
									<li onClick={() => setMobileMenu(false)} key={item.id} className={clsx("header-menu-list-item", { active: location.pathname === item.link })}>
										{item.title}
										{item.id === 4 && userData && userData.favourites.length > 0 && <span className='header-menu-list-item-count'>{userData.favourites.length}</span>}
									</li>
								</Link>
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
