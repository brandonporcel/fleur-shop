import React, { useEffect, useState } from 'react';
import { collection, getDocs } from 'firebase/firestore';
import Link from 'next/link';

import db from '../firebase/config.js';
import ProductLogo from '../components/ProductLogo.jsx';

export default function Shop() {
	const [products, setProducts] = useState([]);
	useEffect(() => {
		(async () => {
			const colRef = collection(db, 'products');
			const snapshots = await getDocs(colRef);
			const docs = snapshots.docs.map((doc) => {
				const data = doc.data();
				data.id = doc.id;
				return data;
			});
			setProducts(docs);
			console.log(docs);
		})();
	}, []);
	return (
		<section className="products-wrapper">
			<div className="products-ctnn">
				{products.map((product) => (
					<Link
						href={`product/${product.id}`}
						class="product-card-ctn"
						key={product.id}
					>
						<div class="product-card__image">
							<img
								src="https://cdn.shopify.com/s/files/1/0587/8179/4470/products/GLF_FRAG_100ML-01_360x.jpg?v=1670390889"
								alt=""
							/>
						</div>
						<h2 class="product-card-title">{product.nombre}</h2>
						<div class="product-card-icon">
							<ProductLogo />
						</div>
					</Link>
				))}
			</div>
		</section>
	);
}
