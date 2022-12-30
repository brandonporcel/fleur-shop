import Link from 'next/link';
import React from 'react';

export default function CarouselHome() {
	return (
		<main className="carousel-wrapper">
			<div className="carousel-products-ctn">
				<Link href="/shop" className="carousel-product">
					<img
						src="https://cdn.shopify.com/s/files/1/0587/8179/4470/files/COLLECTION_01-04_800x.jpg?v=1670362496"
						alt=""
					/>
				</Link>
				<Link href="/shop" className="carousel-product">
					<img
						src="https://cdn.shopify.com/s/files/1/0587/8179/4470/files/COLLECTION_01-05_800x.jpg?v=1670362508"
						alt=""
					/>
				</Link>
				<Link href="/shop" className="carousel-product">
					<img
						src="https://cdn.shopify.com/s/files/1/0587/8179/4470/files/COLLECTION_01-06_800x.jpg?v=1670362519"
						alt=""
					/>
				</Link>
				<Link href="/shop" className="carousel-product">
					<img
						src="https://cdn.shopify.com/s/files/1/0587/8179/4470/files/PETALERS_SHIRT_GREEN_02_800x.jpg?v=1670534780"
						alt=""
					/>
				</Link>
			</div>
		</main>
	);
}
