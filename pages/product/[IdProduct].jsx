import Head from 'next/head';
import { useRouter } from 'next/router';
import { useFetch } from '../../hooks/useFetch';

import Loader from '../../components/Loader';
import { useContext } from 'react';
import CartContext from '../../context/CartContext';
import Accordion from '../../components/Accordion';
import ButtonStyled from '../../components/Button';

export default function IdProduct({}) {
	const { addToCart } = useContext(CartContext);

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

	let accordionItems = [
		{
			name: 'DETAILS',
			content: data.details,
		},
		{
			name: 'SIZE GUIDE',
			content:
				'Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure hic maiores sed delectus sit quia vitae ipsam natus aperiam impedit, eaque nesciunt a accusantium assumenda quae dolorum reiciendis vel! Illum. hola asdlaosdosa sd dd d dsa hola asdlaosdosa sd dd d dsa hola asdlaosdosa sd dd d dsa hola asdlaosdosa sd dd d dsa',
		},
	];
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
						<div className="detail-ctn">
							<h3 className="det-prod-title">{data.name} </h3>
							<div className="gallery-img-ctn">
								<img src={data.image} alt="" className="gallery-img" />
							</div>
							<p className="product-detail-desc">{data.description}</p>
							<p className="small">
								{data.stock < 15 && `*Only ${data.stock} In Stock*`}
							</p>
							<Accordion items={accordionItems}></Accordion>
							<p className="detail-price">
								{new Intl.NumberFormat('es-AR', {
									style: 'currency',
									currency: 'ARS',
								}).format(parseFloat(data.price).toFixed(2))}
							</p>
							<ButtonStyled type="bg" onClick={() => addToCart(data)}>
								Add To Cart
							</ButtonStyled>
						</div>
					)}
				</div>
			</main>
		</>
	);
}
