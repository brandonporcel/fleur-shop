import { useRouter } from 'next/router';
import React, { useContext, useEffect, useRef, useState } from 'react';
import Loader from './Loader';
import db from '../firebase/config.js';
import {
	query,
	where,
	collection as colecctionnn,
	getDocs,
} from 'firebase/firestore';
import ProductLogo from './ProductLogo';
import Link from 'next/link';
import CartContext from '../context/CartContext';

export default function ProductsLayout({ children, queryy }) {
	const { cart, addToCart, deleteFromCart, getAllProducts } =
		useContext(CartContext);
	const [loading, setLoading] = useState(false);

	const router = useRouter();
	const { collection } = router.query;

	const [products, setProducts] = useState([]);

	const productRef = useRef();
	const [productsObserver, setProductsObserver] = useState(null);
	// calling api
	useEffect(() => {
		if (!router.isReady) return;
		setLoading(true);
		(async () => {
			try {
				const dataBase = colecctionnn(db, 'products');
				const colRef = queryy
					? query(dataBase, where('section', '==', collection))
					: dataBase;

				const snapshots = await getDocs(colRef);
				const docs = snapshots.docs.map((doc) => {
					const data = doc.data();
					data.id = doc.id;
					return data;
				});
				setProducts(docs);
				setLoading(false);
				// getAllProducts(docs);
			} catch (error) {
				console.log(error);
			} finally {
				setTimeout(() => {
					setProductsObserver(document.querySelectorAll('.product-card-ctn'));
				}, 300);
			}
		})();
	}, [router.isReady, collection]);
	// observer effect
	useEffect(() => {
		if (productsObserver !== null) {
			const options = {
				threshold: 0.3,
			};
			const detectIntersection = (entries) => {
				entries.forEach((el) => {
					if (el.isIntersecting) {
						el.target.classList.add('showIntersecting');
						// productRef.current.classList.add('showIntersecting');
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
					<Loader />
				) : (
					products.map((product) => (
						<Link
							href={`/product/${product.id}`}
							className="product-card-ctn"
							key={product.id}
							ref={productRef}
						>
							<div className="product-card__image">
								<img
									src={product.image}
									alt={product.name}
									style={{ filter: loading && 'blur(2px)' }}
								/>
							</div>
							<h2 className="product-card-title">{product.name}</h2>
							<div className="product-card-icon">
								<ProductLogo />
							</div>
						</Link>
					))
				)}
			</div>
			{children}
		</section>
	);
}
