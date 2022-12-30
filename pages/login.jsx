import React from 'react';
import { useSession, signIn, signOut } from 'next-auth/react';
import Link from 'next/link';
const login = () => {
	const { data: session } = useSession();
	console.log(session);

	// setMonedas(1000);
	if (session) {
		return (
			<>
				<div>hola {session.user.email}</div>
				<img src={session.user.image} alt="" />
				<button onClick={() => signOut()}> log out</button>
			</>
		);
	} else {
		return (
			<>
				<p>logeate</p>
				<button onClick={() => signIn()}> logueate</button>
			</>
		);
	}
};

export default login;
