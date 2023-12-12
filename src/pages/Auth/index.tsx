import React, { useEffect, useState } from "react";
import Input from "../../ui/Input";
import { ReactComponent as HideIcon } from "../../assets/Hide.svg";
import { ReactComponent as ShowIcon } from "../../assets/Show.svg";
import authImage from "../../assets/Auth-girl.png";
import { Navigate, useParams } from "react-router-dom";
import useUserStore from "../../store/user/userStore";
import clsx from "clsx";

import "./_style.scss";

const authInfoTexts = {
	login: {
		title: "Welcome back!",
		subtitle: "Embrace the nostalgia! Welcome back to your anime sanctuary. Log in and relive your favorite moments",
		invite: {
			text: "No account yet? Join the Anime Realm by Signing Up!",
			inviteText: "Signing Up!",
		},
	},
	register: {
		title: "Create Your Account Today!",
		subtitle: "Embark on an Unforgettable Journey through Diverse Anime Realms, Connect with Like-minded Fans, and Uncover Endless Adventures",
		invite: {
			text: "Already Part of the Adventure? Log In and Resume Your Anime Odyssey!",
			inviteText: "Log In",
		},
	},
};

const Auth = () => {
	const [email, setEmail] = useState<string>("");
	const [password, setPassword] = useState<string>("");
	const [nickName, setNickName] = useState<string>("");
	const [showPassword, setShowPassword] = useState<boolean>(false);
	const [authType, setAuthType] = useState<"login" | "register">("register");
	const [pending, setPending] = useState<boolean>(false);

	const { login, register, isUserLoggedIn } = useUserStore((state) => state);
	const authInfoText = authInfoTexts[authType];
	const { authType: searchAuthType } = useParams();

	const handleShowPassword = (e: React.MouseEvent<HTMLButtonElement>) => {
		e.preventDefault();
		setShowPassword(!showPassword);
	};
	const handleSubmit = async (e: React.FormEvent<HTMLFormElement>, isRegisterPage: boolean) => {
		e.preventDefault();
		setPending(true);
		if (isRegisterPage) {
			register({ email, password, fullName: nickName });
		} else {
			login({ email, password });
		}
	};
	const handleSwitchAuthType = () => {
		if (authType === "login") {
			setAuthType("register");
		} else {
			setAuthType("login");
		}
	};

	const renderAuthLayout = (title: string, isRegisterPage: boolean) => (
		<div className='auth'>
			<h1 className='auth-title'>{title}</h1>
			<form onSubmit={(e) => handleSubmit(e, isRegisterPage)} className='auth-form'>
				<Input label='Email' value={email} onChangeValue={(value) => setEmail(value)} placeholder='example@gmail.com' type='email' isRequired={true} />
				<div className='auth-password'>
					<Input
						inputWrapperStyles='auth-password-input'
						label='Password'
						value={password}
						onChangeValue={(value) => setPassword(value)}
						placeholder='Enter password'
						type={showPassword ? "text" : "password"}
						isRequired={true}
					/>
					<button onClick={handleShowPassword} className='btn show-password'>
						{showPassword ? <HideIcon width={18} height={18} /> : <ShowIcon width={18} height={18} />}
					</button>
				</div>
				{isRegisterPage ? <Input label='Nick Name' value={nickName} onChangeValue={(value) => setNickName(value)} placeholder='Enter your nick name' type='text' isRequired={true} /> : null}

				<button type='submit' className={clsx("btn", { disabled: pending })}>
					{isRegisterPage ? "Register" : "Login"}
					{pending && "..."}
				</button>
			</form>
		</div>
	);

	useEffect(() => {
		if (searchAuthType) {
			setAuthType(searchAuthType as "login" | "register");
		}
	}, [searchAuthType]);

	if (isUserLoggedIn) {
		return <Navigate to='/' />;
	}

	return (
		<div className='auth-page'>
			<div className='auth-page-content container'>
				<div className='auth-page-form'>{authType === "register" && renderAuthLayout("Registration", true)}</div>
				<div className='auth-page-form'>{authType === "login" && renderAuthLayout("Login", false)}</div>
				<div className={clsx("auth-page-info", [authType])}>
					<div className='auth-page-text'>
						<h2 className='auth-page-info-title'>{authInfoText.title}</h2>
						<p className='auth-page-info-subtitle'>{authInfoText.subtitle}</p>
						<p className='auth-page-info-text'>
							{authInfoText.invite.text.split(authInfoText.invite.inviteText)[0]}
							<span onClick={handleSwitchAuthType}>{authInfoText.invite.inviteText}</span>
							{authInfoText.invite.text.split(authInfoText.invite.inviteText)[1]}
						</p>
					</div>
					<img className='girl-image' src={authImage} alt='auth-girl' />
				</div>
			</div>
		</div>
	);
};

export default Auth;
