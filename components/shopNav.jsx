import { useRouter } from 'next/router';
import Link from 'next/link';
import React from 'react';

export default function ShopNav({ visible }) {
	const router = useRouter();
	const { collection } = router.query;
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
			name: 'all',
			id: 'd',
		},
	];
	return (
		visible && (
			<nav className="shop-nav-container">
				<ul>
					{sections?.map((el) => (
						<li key={el.id}>
							<Link
								style={{
									borderBottom:
										collection === el.name && '1px solid var(--text-color)',
								}}
								href={`${el.link}`}
							>
								{el.name}
							</Link>
						</li>
					))}
				</ul>
			</nav>
		)
	);
}
