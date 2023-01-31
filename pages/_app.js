import '../styles/globals.css';
import { SessionProvider } from 'next-auth/react';
import Layout from '../components/Layout/Layout';
import { CartProvider } from '../context/CartContext';
import { ProductsProvider } from '../context/Products.Context';
import { GoogleUserProvider } from '../context/GoogleUser.Context';

export default function App({ Component, pageProps, session }) {
	return (
		<GoogleUserProvider>
			<ProductsProvider>
				<CartProvider>
					<Layout>
						<SessionProvider session={session}>
							<Component {...pageProps} />
						</SessionProvider>
					</Layout>
				</CartProvider>
			</ProductsProvider>
		</GoogleUserProvider>
	);
}
