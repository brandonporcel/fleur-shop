import '../styles/globals.css';
import { SessionProvider } from 'next-auth/react';
import Layout from '../components/Layout';
import {CartProvider} from '../context/CartContext';

export default function App({ Component, pageProps, session }) {
	return (
		<CartProvider>
			<Layout>
				<SessionProvider session={session}>
					<Component {...pageProps} />
				</SessionProvider>
			</Layout>
		</CartProvider>
	);
}
