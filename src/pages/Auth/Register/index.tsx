import React from "react";
import Input from "../../../ui/Input";

import "./_style.scss";

const Register = () => {
	return (
		<div className='register'>
			<h1 className='register-title'>Register</h1>
			<form className='register-form'>
				<Input label='Email' onChangeValue={() => {}} placeholder='example@gmail.com' type='email' isRequired={true} />
				<Input label='Password' onChangeValue={() => {}} placeholder='Enter password' type='password' isRequired={true} />
				<Input label='Nick Name' onChangeValue={() => {}} placeholder='Enter your nick name' type='text' isRequired={true} />
				<button className='btn'>Submit</button>
			</form>
		</div>
	);
};

export default Register;
