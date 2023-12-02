import React from "react";
import Input from "../../../ui/Input";

import "./_style.scss";

const Login = () => {
	return (
		<div className='login'>
			<h1 className='login-title'>Login</h1>
			<form className='login-form'>
				<Input label='Email' onChangeValue={() => {}} placeholder='example@gmail.com' type='email' isRequired={true} />
				<Input label='Password' onChangeValue={() => {}} placeholder='Enter password' type='password' isRequired={true} />
				<button className='btn'>Sign in</button>
			</form>
		</div>
	);
};

export default Login;
