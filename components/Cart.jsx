import { useContext } from 'react';
import CartContext from '../context/CartContext';
import CartProduct from './CartProduct';
import ButtonStyled from './Button';

import { formatPrice } from '../helpers/helpers';

export default function Cart({ visible }) {
	const {
		cart,
		addToCart,
		deleteOneFromCart,
		deleteAllFromCart,
		buyProducts,
		setCartVisible,
		cartVisible,
		finalPriceCart,
	} = useContext(CartContext);

	return (
		<div
			className={`${
				visible ? 'cart-wrapper is-open' : 'cart-wrapper is-close'
			}`}
		>
			<header className="title">
				<h4>Your Trunk</h4>
				<div className="cart-close-btn">
					<span onClick={() => setCartVisible(!cartVisible)}>X</span>
				</div>
			</header>
			<div className="cart-products-ctn">
				{cart?.length === 0 ? (
					<span className="cart-empty">Your cart is currently empty.</span>
				) : (
					cart?.map((el) => {
						return (
							<CartProduct
								key={el.id}
								title={el.name}
								quantity={el.quantity}
								img={el.img_slider[0].url}
								id={el.id}
								stock={el.stock}
								price={el.price}
								addToCart={addToCart}
								deleteOneFromCart={deleteOneFromCart}
								deleteAllFromCart={deleteAllFromCart}
							/>
						);
					})
				)}
			</div>
			{cart?.length === 0 ? (
				''
			) : (
				<footer>
					<div className="cart-subtotal-row">
						<p>Subtotal</p>
						<p>{formatPrice(finalPriceCart())}</p>
					</div>

					<div className="buy-btn" onClick={buyProducts}>
						<ButtonStyled type="bgReverse">Buy</ButtonStyled>
					</div>
				</footer>
			)}
		</div>
	);
}
