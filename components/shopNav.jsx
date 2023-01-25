import Link from 'next/link';
import React from 'react';

export default function ShopNav({ visible }) {
	const sections = [
		{
			link: '/collection/accesories',
			name: 'accesories',
			id: 'a',
		},
		{
			link: '/collection/tops',
			name: 'tops',
			id: 'b',
		},
		{
			link: '/collection/bottoms',
			name: 'bottoms',
			id: 'c',
		},
		{
			link: '/shop',
			name: 'shop',
			id: 'd',
		},
	];
	return (
		visible && (
			<nav className="shop-nav-container">
				<ul>
					{sections.map((el) => (
						<li key={el.id}>
							<Link href={`${el.link}`}>{el.name}</Link>
						</li>
					))}
				</ul>
			</nav>
		)
	);
}
