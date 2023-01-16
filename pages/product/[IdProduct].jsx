import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { useFetch } from '../../hooks/useFetch';
import Link from 'next/link';
// import { doc, update, collection } from 'firebase/firestore';
import { doc, updateDoc } from 'firebase/firestore';

import db from '../../firebase/config.js';

export default function IdProduct({}) {
	const router = useRouter();
	const { IdProduct } = router.query;
	const [data] = useFetch(IdProduct);
	const [comments, setComments] = useState([
		{
			text: '',
		},
	]);
	// useEffect(() => {
	// 	setComments([{ text: }]);
	// }, []);

	// console.log(data, 'index');
	const [otrasMonedas, setOtrasMonedas] = useState(5000);
	const comprar = async (id, price, quantity) => {
		// const product=fetcfH(id,idProudct)
		// doc.update({product,quantity:quantity-quantity})
		// setMonedas(monedas-price)
		// var db = firebase.firestore();
		// console.log('comprandoo');
		setOtrasMonedas(otrasMonedas - data.price);
		const washingtonRef = doc(db, 'products', 'eDvNi12YEjURkM5JwyGd');
		await updateDoc(doc(db, 'products', 'eDvNi12YEjURkM5JwyGd'), {
			stock: data.stock - 1,
		});
	};
	let notaNuvea;
	// const change = (e) => {

	// 	setComments({
	// 		[e.target.value]: e.target.value,
	// 	});
	// };
	const subir = (e) => {
		e.preventDefault();
		notaNuvea = {
			// [e.firstChild.name]: e.firstChild.target.value,
			// text: e.firstChild.value,
		};
		console.log(e.current);
		const newNote = {
			id: new Date().valueOf(),
			...notaNuvea,
		};

		setComments([...comments, newNote]);
	};
	return (
		<main>
			<div className="detail-wrapper">
				{/* <b>{otrasMonedas}</b> */}
				<h1>{data.name} </h1>
				<div className="gallery-img-ctn">
					<img src={data.image} alt="" className="gallery-img" />
				</div>

				<p className="product-detail-desc">
					Lorem ipsum, dolor sit amet consectetur adipisicing elit. Odit quaerat
					nobis, molestiae, quas possimus quae quo distinctio ab minus culpa
					maiores facilis. Quas aspernatur eum error numquam suscipit ut eos!
				</p>
				<h2>price: {data.price} </h2>
				<h3>stock:_{data.stock} </h3>
				<button onClick={comprar}>Comprar</button>
				<h2>ComENTARIOS:</h2>
				<form onSubmit={(e) => subir(e)}>
					<input
						type="text"
						name="text"
						value={comments.text}
						// onChange={change}
					/>
					<button>subit</button>
				</form>
				{comments.map((com, i) => (
					<p key={i}>{com.text}</p>
				))}
			</div>
		</main>
	);
}
