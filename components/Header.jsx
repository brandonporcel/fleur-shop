import Link from 'next/link';
import React from 'react';
import Logo from './Logo';
import ThemeSwitcher from './ThemeSwitcher';

export default function Header() {
	return (
		<header>
			<nav>
				<div className="nav-ctn left">
					<p className="header-nav-item">SHOP</p>
					<ThemeSwitcher />
				</div>
				<div className="nav-ctn center">
					<Link href="/" title="Golf le Fleur" aria-label="Golf le Fleur">
						<Logo color="var(--text-color)" />
					</Link>
				</div>
				<div className="nav-ctn right">
					<Link href={'/login'} className="header-nav-item login-btn">
						Login
					</Link>
					<button className="noBtnStyles header-cart-item">cart(3)</button>
				</div>
			</nav>
		</header>
	);
}
