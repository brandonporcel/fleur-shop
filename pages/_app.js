import '../styles/globals.css';
import { SessionProvider } from 'next-auth/react';
import Layout from '../components/Layout';
import { useState } from 'react';
export default function App({ Component, pageProps, session }) {
	const [monedas, setMonedas] = useState(1000);
	const comprar = (id, price, quantity) => {
		// const product=fetcfH(id,idProudct)
		// doc.update({product,quantity:quantity-quantity})
		// setMonedas(monedas-price)
	};
	return (
		<Layout monedas={monedas} setMonedas={setMonedas} comprar={comprar}>
			<SessionProvider session={session}>
				<Component {...pageProps} />
			</SessionProvider>
		</Layout>
	);
}
