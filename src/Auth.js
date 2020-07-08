import React from "react";

const Auth = ({ hasact, onAuth, onpassword, onemail, password, email }) => {
	return (
		<div>
			<input type="text" placeholder="Email" value={email} onChange={onemail} />
			<input
				type="text"
				placeholder="Password"
				value={password}
				onChange={onpassword}
			/>
			<button>{hasact ? "Login" : "Signup"}</button>
			<input
				type="checkbox"
				id="haveAccount"
				value="haveAccount"
				onChange={onAuth}
			/>
			<label for="haveAccount">I have an account</label>
		</div>
	);
};

export default Auth;
