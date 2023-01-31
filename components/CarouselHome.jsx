import Link from 'next/link';
import React, { useEffect, useRef } from 'react';

export default function CarouselHome() {
	const Container = useRef(null);

	const scroll = (e) => {
		e.deltaY > 0
			? (Container.current.scrollLeft += 50)
			: (Container.current.scrollLeft -= 50);
	};

	// useEffect(() => {
	// 	console.log('hgolaaas', window.matchMedia('min-width:700px'));
	// }, []);

	useEffect(() => {
		Container.current.addEventListener(
			'wheel',
			(e) => {
				e.preventDefault();
			},
			{
				passive: false,
			}
		);
	}, []);

	const images = [
		{
			title: 'guy looking around',
			url: 'https://cdn.shopify.com/s/files/1/0587/8179/4470/files/COLLECTION_01-04_800x.jpg?v=1670362496',
			id: 11,
		},
		{
			title: 'nice tie',
			url: 'https://cdn.shopify.com/s/files/1/0587/8179/4470/files/COLLECTION_01-05_800x.jpg?v=1670362508',
			id: 22,
		},
		{
			title: 'vibing girl',
			url: 'https://cdn.shopify.com/s/files/1/0587/8179/4470/files/COLLECTION_01-06_800x.jpg?v=1670362519',
			id: 33,
		},
		{
			title: 'where am i',
			url: 'https://cdn.shopify.com/s/files/1/0587/8179/4470/files/PETALERS_SHIRT_GREEN_02_800x.jpg?v=1670534780',
			id: 42,
		},
		{
			title: 'close-up',
			url: 'https://cdn.shopify.com/s/files/1/0587/8179/4470/files/COLLECTION_01-09_800x.jpg?v=1670362564',
			id: 55,
		},
		{
			title: 'comb in pants',
			url: 'https://cdn.shopify.com/s/files/1/0587/8179/4470/files/COLLECTION_01-13_800x.jpg?v=1670362625',
			id: 66,
		},
	];
	return (
		<main className="carousel-wrapper">
			<div ref={Container} className="carousel-products-ctn" onWheel={scroll}>
				{images?.map(({ id, title, url }) => (
					<Link href="/shop" key={id} className="carousel-product">
						<img src={url} alt={title} />
					</Link>
				))}
			</div>
		</main>
	);
}
