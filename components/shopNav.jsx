import Link from 'next/link';
import React from 'react';

export default function ShopNav({ visible }) {
	return (
		visible && (
			<nav className="shop-nav-container">
				<ul>
					<li>
						<Link href={'/collection/accesories'}>accesories</Link>
					</li>
					<li>
						<Link href={'/collection/tops'}>tops</Link>
					</li>
					<li>
						<Link href={'/collection/bottoms'}>bottoms</Link>
					</li>
					<li>
						<Link href={'/shop'}>all</Link>
					</li>
				</ul>
			</nav>
		)
	);
}
