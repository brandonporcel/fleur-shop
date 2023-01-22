import Link from 'next/link';
import React, { useContext, useState } from 'react';
import CartContext from '../context/CartContext';
import Cart from './Cart';
import Logo from './icons/Logo';
import ShopNav from './shopNav';
import ThemeSwitcher from './ThemeSwitcher';

export default function Header() {
	const [shopNav, setShopNav] = useState(false);
	const [cartCheckout, setCartCheckout] = useState(false);
	const { cart } = useContext(CartContext);
	return (
		<>
			<header>
				<div className="nav-ctn left">
					<p className="header-nav-item" onClick={() => setShopNav(!shopNav)}>
						SHOP
					</p>
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
					<button
						className="noBtnStyles header-cart-item"
						onClick={() => setCartCheckout(!cartCheckout)}
					>
						cart ({cart.length})
					</button>
				</div>
			</header>
			<Cart visible={cartCheckout}></Cart>
			<ShopNav visible={shopNav}></ShopNav>
		</>
	);
}
