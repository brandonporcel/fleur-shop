import React, { createContext, useEffect, useRef, useState } from 'react';

import db from '../firebase/config.js';
import {
	query,
	where,
	collection as colecctionnn,
	getDocs,
} from 'firebase/firestore';
import { useRouter } from 'next/router.js';

const ProductsContext = createContext();

const ProductsProvider = ({ children }) => {
	const [loading, setLoading] = useState(false);
	const router = useRouter();
	const { collection } = router.query;

	const [products, setProducts] = useState([]);

	const productRef = useRef();
	const [productsObserver, setProductsObserver] = useState(null);
	const [urlSection, setUrlSection] = useState(true);

	const [counterPagination, setCounterPagination] = useState(1);

	const [dobleProductsForPagination, setDobleProductsForPagination] = useState(
		[]
	);
	const [mostRecent, setMostRecent] = useState([]);
	let itempsPerPage = 6;
	let maxIndex = Math.ceil(products.length / itempsPerPage);

	const nextPage = () => {
		counterPagination === maxIndex + 1
			? setCounterPagination(1)
			: setCounterPagination(counterPagination + 1);

		const index =
			counterPagination === maxIndex
				? setCounterPagination(1)
				: counterPagination * itempsPerPage;
		setDobleProductsForPagination(() =>
			[...products].splice(index, itempsPerPage)
		);
	};
	// 18 items. 17 lenght
	const prevPage = () => {
		counterPagination === -1
			? setCounterPagination(maxIndex)
			: setCounterPagination(counterPagination - 1);
		let prevPage = counterPagination - 2;

		const index =
			counterPagination === -1
				? setCounterPagination(maxIndex)
				: prevPage * itempsPerPage;
		setDobleProductsForPagination(() =>
			[...products].splice(index, itempsPerPage)
		);
	};

	useEffect(() => {
		setProductsObserver(document.querySelectorAll('.product-card-ctn'));
	}, [router.query]);

	useEffect(() => {
		setProductsObserver(document.querySelectorAll('.product-card-ctn'));
	}, [dobleProductsForPagination]);

	const mostRecentsProds = () => {
		// setProducts(mostRecent);
		setDobleProductsForPagination([...mostRecent].slice(0, 6));
		console.log(
			'mostRecent',
			mostRecent,
			'[...mostRecent]',
			[...mostRecent],
			'dobleProductsForPagination',
			dobleProductsForPagination,
			'products',
			products
		);
		setCounterPagination(1);
	};

	const sortByPrice = (type) => {
		const mayor = products.sort((a, b) => {
			// return;
			switch (type) {
				case 'mayor':
					if (a.price > b.price) return -1;
					if (b.price > a.price) return 1;
					break;
				case 'minor':
					if (a.price > b.price) return 1;
					if (b.price > a.price) return -1;
					break;

				default:
					0;
			}
		});
		setCounterPagination(1);

		setDobleProductsForPagination([...mayor].slice(0, 6));
		console.log(
			'sortByPrice',
			products,
			'dobleProductsForPagination',
			dobleProductsForPagination
		);
	};

	// calling api
	useEffect(() => {
		if (!router.isReady) return;
		collection == undefined ? setUrlSection(false) : setUrlSection(true);
		setLoading(true);

		(async () => {
			try {
				const dataBase = colecctionnn(db, 'products');
				const colRef =
					urlSection == true
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
				setDobleProductsForPagination(docs.slice(0, itempsPerPage));
				setMostRecent([...docs]);
			} catch (error) {
				console.log(error);
			} finally {
				setTimeout(() => {
					setProductsObserver(document.querySelectorAll('.product-card-ctn'));
				}, 300);
			}
		})();
	}, [router.isReady, collection, urlSection]);
	useEffect(() => {
		// const productsFromApi = products?.map((prod) => prod);
		// setDobleProductsForPagination(
		// 	[...productsFromApi].splice(0, itempsPerPage)
		// );
	}, [router.isReady, collection, urlSection]);

	// observer effect
	useEffect(() => {
		if (productsObserver !== null) {
			const options = {
				threshold: 0.14,
			};
			const detectIntersection = (entries) => {
				entries.forEach((el) => {
					if (el.isIntersecting) {
						el.target.classList.add('showIntersecting');
					} else if (el.target.classList.contains('showIntersecting')) {
						el.target.classList.remove('showIntersecting');
					}
				});
			};
			const observer = new IntersectionObserver(detectIntersection, options);
			productsObserver.forEach((el) => {
				observer.observe(el);
			});
		}
	}, [productsObserver]);
	const data = {
		loading,
		products,
		productRef,
		dobleProductsForPagination,
		counterPagination,
		maxIndex,
		nextPage,
		prevPage,
		sortByPrice,
		mostRecentsProds,
	};
	return (
		<ProductsContext.Provider value={data}>{children}</ProductsContext.Provider>
	);
};

export default ProductsContext;
export { ProductsProvider };
