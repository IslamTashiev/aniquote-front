import React from "react";
import Register from "./Register";
import { ReactComponent as GoogleIcon } from "../../assets/Google.svg";

import "./_style.scss";
import { useParams } from "react-router-dom";
import Login from "./Login";

const Auth = () => {
	const { authType } = useParams();

	return (
		<div className='auth-page'>
			<div className='auth-page-content container'>
				<div className='auth-page-form'>
					{authType === "register" && <Register />}
					{authType === "login" && <Login />}

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
