import React, { useEffect, useRef, useState } from 'react';
import { collection, getDocs } from 'firebase/firestore';
import Link from 'next/link';

import db from '../firebase/config.js';
import ProductLogo from '../components/ProductLogo.jsx';

export default function Shop() {
	const [loading, setLoading] = useState(false);

	const [products, setProducts] = useState([]);
	const [productsObserver, setProductsObserver] = useState(null);
	useEffect(() => {
		setLoading(true);
		(async () => {
			try {
				const colRef = collection(db, 'products');
				const snapshots = await getDocs(colRef);
				const docs = snapshots.docs.map((doc) => {
					const data = doc.data();
					data.id = doc.id;
					return data;
				});
				setProducts(docs);
				setLoading(false);
			} catch (error) {
				console.log(error);
			} finally {
				setTimeout(() => {
					setProductsObserver(document.querySelectorAll('.product-card-ctn'));
				}, 300);
			}
		})();
	}, []);
	// intersection->letter,bground
	const productRef = useRef();

	useEffect(() => {
		if (productsObserver !== null) {
			const options = {
				threshold: 0.15,
			};
			const detectIntersection = (entries) => {
				entries.forEach((el) => {
					if (el.isIntersecting) {
						el.target.classList.add('showIntersecting');
						// productRef.current.classList.add('showIntersecting');
						console.log(el.target);
					} else {
						if (el.target.classList.contains('showIntersecting')) {
							el.target.classList.remove('showIntersecting');
							// if (productRef.current.classList.contains('showIntersecting')) {
							// productRef.current.classList.remove('showIntersecting');
						}
					}
				});
			};
			const observer = new IntersectionObserver(detectIntersection, options);
			productsObserver.forEach((el) => {
				observer.observe(el);
			});
		}
	}, [productsObserver]);
	return (
		<section className="products-wrapper">
			<div className="products-ctnn">
				{loading ? (
					<p>loadinggg</p>
				) : (
					products.map((product) => (
						<Link
							href={`product/${product.id}`}
							className="product-card-ctn"
							key={product.id}
							ref={productRef}
						>
							<div className="product-card__image">
								<img
									src="https://cdn.shopify.com/s/files/1/0587/8179/4470/products/GLF_FRAG_100ML-01_360x.jpg?v=1670390889"
									alt=""
									style={{ filter: loading && 'blur(2px)' }}
								/>
							</div>
							<h2 className="product-card-title">{product.nombre}</h2>
							<div className="product-card-icon">
								<ProductLogo />
							</div>
						</Link>
					))
				)}
			</div>
		</section>
	);
}