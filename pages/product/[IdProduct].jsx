import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { useFetch } from '../../hooks/useFetch';

import Loader from '../../components/Loader';

import Head from 'next/head';

export default function IdProduct({}) {
	const router = useRouter();
	const { IdProduct } = router.query;
	const [data, loader] = useFetch(IdProduct);
	const capitalizeEachWord = (sentence) => {
		const arr = typeof sentence === 'string' && sentence.split(' ');
		for (var i = 0; i < arr.length; i++) {
			arr[i] = arr[i].charAt(0).toUpperCase() + arr[i].slice(1);
		}
		const str2 = typeof sentence === 'string' && arr.join(' ');
		return str2;
	};

	return (
		<>
			<Head>
				<title>{capitalizeEachWord(data.name)}</title>
			</Head>
			<main>
				<div className="detail-wrapper">
					{loader ? (
						<Loader></Loader>
					) : (
						<>
							<h1>{data.name} </h1>
							<div className="gallery-img-ctn">
								<img src={data.image} alt="" className="gallery-img" />
							</div>
							<p className="product-detail-desc">
								Lorem ipsum, dolor sit amet consectetur adipisicing elit. Odit
								quaerat nobis, molestiae, quas possimus quae quo distinctio ab
								minus culpa maiores facilis. Quas aspernatur eum error numquam
								suscipit ut eos!
							</p>
							<h2>price: {data.price} </h2>
							<h3>stock:_{data.stock} </h3>
							<button>Comprar</button>
							<h2>ComENTARIOS:</h2>
							<form onSubmit={(e) => subir(e)}>
								<input
									type="text"
									name="text"

									// onChange={change}
								/>
								<button>subit</button>
							</form>
						</>
					)}
				</div>
			</main>
		</>
	);
}
