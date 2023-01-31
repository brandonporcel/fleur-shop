import React, { useContext, useEffect } from 'react';
import { useSession, signIn, signOut, getSession } from 'next-auth/react';
import GoogleUserContext from '../context/GoogleUser.Context';
import ButtonStyled from '../components/Button';

const login = () => {
	const { data: session } = useSession({ required: false });
	const { setSession } = useContext(GoogleUserContext);
	useEffect(() => {
		setSession(session);
	}, [session]);

	return (
		<div style={{ textAlign: 'CENTER' }}>
			{session ? (
				<>
					<p style={{ fontSize: 18, fontWeight: 500 }}>
						Chau {session.user.name}
					</p>
					<div>
						<img
							src={session.user.image}
							style={{ height: 32, width: 32 }}
							alt={session.user.email}
						/>
					</div>
					<ButtonStyled onClick={() => signOut()}>LogOut</ButtonStyled>
				</>
			) : (
				<>
					<p style={{ fontSize: 18, fontWeight: 500 }}>
						Logueate para comprar con moneditas {':)'}
					</p>
					<ButtonStyled onClick={() => signIn()}>Login</ButtonStyled>
				</>
			)}
		</div>
	);
};
export default login;
