import React, { useState } from "react";
import "./App.css";

import Auth from "./Auth";

const App = () => {
	const [email, setemail] = useState("");
	const [password, setpassword] = useState("");
	const [hasact, setact] = useState(false);

	const onAuth = () => {
		setact(!hasact);
	};

	const onemail = (e) => {
		setemail(e.target.value);
	};
	const onpassword = (e) => {
		setpassword(e.target.value);
	};
	return (
		<div>
			<Auth
				hasact={hasact}
				onAuth={onAuth}
				onpassword={onpassword}
				onemail={onemail}
				password={password}
				email={email}
			/>
		</div>
	);
};

export default App;
