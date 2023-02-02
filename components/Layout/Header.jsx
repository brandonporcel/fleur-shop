import Link from 'next/link';
import React, { useContext, useState } from 'react';
import CartContext from '../../context/CartContext';
import GoogleUserContext from '../../context/GoogleUser.Context';
import Cart from '../Cart';
import Logo from '../icons/Logo';
import ShopNav from '../shopNav';
import ThemeSwitcher from '../ThemeSwitcher';

export default function Header() {
	const [shopNav, setShopNav] = useState(false);
	const { session, money } = useContext(GoogleUserContext);
	const { cart, cartVisible, setCartVisible } = useContext(CartContext);

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
					{session ? (
						<div>
							💸{money}
							<Link
								style={{ marginLeft: 10 }}
								href={'/login'}
								className="header-nav-item login-btn"
								title={'Log Out'}
							>
								👋
							</Link>
						</div>
					) : (
						<Link href={'/login'} className="header-nav-item login-btn">
							Login
						</Link>
					)}

					<button
						className="noBtnStyles header-cart-item"
						onClick={() => setCartVisible(!cartVisible)}
					>
						cart ({cart.length})
					</button>
				</div>
			</header>
			<Cart visible={cartVisible}></Cart>
			<ShopNav visible={shopNav}></ShopNav>
		</>
	);
}
