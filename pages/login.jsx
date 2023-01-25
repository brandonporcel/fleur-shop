import React from 'react';
import { useSession, signIn, signOut } from 'next-auth/react';

const login = () => {
	const { data: session } = useSession();
	console.log(session);

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
