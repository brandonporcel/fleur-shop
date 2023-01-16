import Head from 'next/head';
import ThemeSwitcher from './ThemeSwitcher';
import Newsletter from '../components/Newsletter.jsx';
import Header from './Header';
import Footer from './Footer';
import ToTop from './ToTop';

export default function Layout({ children, monedas }) {
	return (
		<>
			<Head>
				<title>bg23</title>
				<meta charset="utf-8" />
				<meta name="viewport" content="width=device-width, initial-scale=1" />

				<meta property="og:title" content="bg23 book gallery" />
				<meta name="description" content="Brandon Porcel | newproject#23" />
				<meta property="og:image" content="%PUBLIC_URL%/669.jpg" />
				<link
					rel="shortcut icon"
					href="https://images.emojiterra.com/twitter/v13.1/128px/1f380.png"
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
