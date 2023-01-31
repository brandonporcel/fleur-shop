import React, { createContext, useEffect, useState } from 'react';

const GoogleUserContext = createContext();
const GoogleUserProvider = ({ children }) => {
	const [session, setSession] = useState(null);
	const [money, setMoney] = useState(null);

	useEffect(() => {
		session ? setMoney(5000) : setMoney(0);
	}, [session]);

	const data = { session, setSession, money, setMoney };
	return (
		<GoogleUserContext.Provider value={data}>
			{children}
		</GoogleUserContext.Provider>
	);
};

export default GoogleUserContext;
export { GoogleUserProvider };
