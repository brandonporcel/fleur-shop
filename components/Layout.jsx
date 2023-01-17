import Head from 'next/head';
import Newsletter from '../components/Newsletter.jsx';
import Header from './Header';
import Footer from './Footer';
import ToTop from './ToTop';

export default function Layout({ children }) {
	return (
		<>
			<Head>
				<title>Fleur Shop*</title>
				<meta charset="utf-8" />
				<meta name="viewport" content="width=device-width, initial-scale=1" />

				<meta property="og:title" content="Fleur Shop - Replik" />
				<meta
					name="description"
					content="Brandon Porcel | Golf le Fleur recreation "
				/>
				<meta property="og:image" content="%PUBLIC_URL%/669.jpg" />
				<link
					rel="shortcut icon"
					href="https://images.emojiterra.com/twitter/v14.0/128px/1f33c.png"
					type="image/png"
				/>
			</Head>

			<Newsletter />
			<ToTop />
			<Header />

			{children}

			<Footer />
		</>
	);
}
