import Head from 'next/head';
import { useContext, useEffect } from 'react';
import { useRouter } from 'next/router';

import { useFetch } from '../../hooks/useFetch';

import Loader from '../../components/Loader';
import CartContext from '../../context/CartContext';
import Accordion from '../../components/Accordion';
import ButtonStyled from '../../components/Button';

import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';
import Slider from '../../styles/Slider.Splide.module.css';

import { capitalizeEachWord, formatPrice } from '../../helpers/helpers';

export default function IdProduct({}) {
	const { addToCart, setCartVisible, getSpecificProdData, cartVisible } =
		useContext(CartContext);

	const router = useRouter();
	const { IdProduct } = router.query;
	const [data, loader] = useFetch(IdProduct);
	const { img_slider } = data;
	const imggSliderTest = [
		{
			url: 'sda',
		},
		{
			url: 'asd',
		},
	];
	let accordionItems = [
		{
			name: 'DETAILS',
			content: data.details,
		},
	];
	data.sizeGuide &&
		accordionItems.push({
			name: 'Size Guide',
			content: (
				<table>
					<thead>
						<tr>
							<th>SIZE</th>
							<th>XS</th>
							<th>S</th>
							<th>M</th>
							<th>L</th>
							<th>XL</th>
						</tr>
					</thead>
					<tbody>
						<tr>
							<td>Length</td>
							<td>24"</td>
							<td>24.5"</td>
							<td>25"</td>
							<td>26"</td>
							<td>26.5"</td>
						</tr>
						<tr>
							<td>Chest </td>
							<td>20"</td>
							<td>20.5"</td>
							<td>21"</td>
							<td>22"</td>
							<td>22.5"</td>
						</tr>
						<tr>
							<td>Sleeve</td>
							<td>25"</td>
							<td>25.5"</td>
							<td>26"</td>
							<td>26.5"</td>
							<td>27"</td>
						</tr>
					</tbody>
				</table>
			),
		});

	const addToCartYOpenCart = () => {
		setCartVisible(true);
		addToCart(data);
	};

	return (
		<>
			{/* <Head>
				<title>{capitalizeEachWord(data.name)}</title>
			</Head> */}

			<main>
				<div className="detail-wrapper">
					{loader ? (
						<Loader></Loader>
					) : (
						<div className="detail-ctn">
							<h3 className="det-prod-title">{data.name} </h3>
							<Splide
								aria-labelledby="My Favorite Images"
								className={Slider.carouselWrapper}
								options={{
									arrows: false,
								}}
							>
								{imggSliderTest?.map(({ url, alt }, i) => (
									<SplideSlide key={i}>
										<img src={url} alt={alt} />
									</SplideSlide>
								))}
							</Splide>
							<p className="product-detail-desc">{data.description}</p>
							<p className="small">
								{data.stock <= 15 && `*Only ${data.stock} In Stock*`}
							</p>
							<Accordion items={accordionItems}></Accordion>
							<h4 className="detail-price">{formatPrice(data.price)}</h4>

							{data.stock > getSpecificProdData(data.id) ? (
								<ButtonStyled type="bg" onClick={addToCartYOpenCart}>
									Add To Cart
								</ButtonStyled>
							) : (
								<ButtonStyled type="bg">
									you've added all the stock to the cart
								</ButtonStyled>
							)}
						</div>
					)}
				</div>
			</main>
		</>
	);
}
