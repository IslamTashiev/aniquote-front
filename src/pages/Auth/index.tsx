import React, { useState, useEffect } from "react";
import Input from "../../ui/Input";
import { ReactComponent as GoogleIcon } from "../../assets/Google.svg";
import { ReactComponent as HideIcon } from "../../assets/Hide.svg";
import { ReactComponent as ShowIcon } from "../../assets/Show.svg";
import { useParams } from "react-router-dom";
import useUserStore from "../../store/user/userStore";

import "./_style.scss";

const Auth = () => {
	const [email, setEmail] = useState<string>("");
	const [password, setPassword] = useState<string>("");
	const [nickName, setNickName] = useState<string>("");
	const [showPassword, setShowPassword] = useState<boolean>(false);

	const { login, userData, register } = useUserStore((state) => state);
	const { authType } = useParams();
	const isRegisterPage = authType === "register";

	const handleShowPassword = (e: React.MouseEvent<HTMLButtonElement>) => {
		e.preventDefault();
		setShowPassword(!showPassword);
	};
	const handleSubmit = (e: React.ChangeEvent<HTMLFormElement>) => {
		e.preventDefault();
		if (isRegisterPage) {
			register({ email, password, fullName: nickName });
		} else {
			login({ email, password });
		}
	};
	const renderAuthLayout = (
		<div className='auth'>
			<h1 className='auth-title'>Register</h1>
			<form onSubmit={handleSubmit} className='auth-form'>
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

				<button type='submit' className='btn'>
					{isRegisterPage ? "Register" : "Login"}
				</button>
			</form>
		</div>
	);

	useEffect(() => {
		console.log(userData);
	}, [userData]);

	return (
		<div className='auth-page'>
			<div className='auth-page-content container'>
				<div className='auth-page-form'>
					{renderAuthLayout}
					<div className='other-auth-types'>
						<span>Or join with</span>

						<button className='btn btn-text google-btn'>
							<GoogleIcon width={24} height={24} />
							Google
						</button>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Auth;
