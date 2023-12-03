import React, { useState } from "react";
import Input from "../../../ui/Input";
import { ReactComponent as HideIcon } from "../../../assets/Hide.svg";
import { ReactComponent as ShowIcon } from "../../../assets/Show.svg";

import "./_style.scss";

const Register = () => {
	const [email, setEmail] = useState<string>("");
	const [password, setPassword] = useState<string>("");
	const [nickName, setNickName] = useState<string>("");
	const [showPassword, setShowPassword] = useState<boolean>(false);

	const handleShowPassword = (e: React.MouseEvent<HTMLButtonElement>) => {
		e.preventDefault();
		setShowPassword(!showPassword);
	};

	return (
		<div className='register'>
			<h1 className='register-title'>Register</h1>
			<form className='register-form'>
				<Input label='Email' value={email} onChangeValue={(value) => setEmail(value)} placeholder='example@gmail.com' type='email' isRequired={true} />
				<div className='register-password'>
					<Input
						inputWrapperStyles='register-password-input'
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
				<Input label='Nick Name' value={nickName} onChangeValue={(value) => setNickName(value)} placeholder='Enter your nick name' type='text' isRequired={true} />
				<button className='btn'>Submit</button>
			</form>
		</div>
	);
};

export default Register;
