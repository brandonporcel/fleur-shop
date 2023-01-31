import React, { createContext, useEffect, useRef, useState } from 'react';

const GoogleUserContext = createContext();
const GoogleUserProvider = ({ children }) => {
	// const { data: session } = useSession();
	const [session, setSession] = useState(null);
	const [money, setMoney] = useState(null);
	console.log(session, 'hola session');
	useEffect(() => {
		session ? setMoney(5000) : setMoney(0);
		console.log(money);
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
