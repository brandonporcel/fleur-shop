import { useContext } from 'react';
import CartContext from '../context/CartContext';

// import Button from './Button';
// import CartProduct from './CartProduct';

export default function Cart({
	visible,
	// cart,
	// deleteOne,
	// deleteAllProduct,
	// buyCart,
}) {
	const { cart, addToCart, deleteOneFromCart, deleteAllFromCart, buyProducts } =
		useContext(CartContext);

	return (
		<div className={`${visible ? 'cart-wrapper is-open' : 'cart-wrapper'}`}>
			<div className="title">
				<h3>Your Order</h3>
			</div>
			<div className="cart-products-ctn">
				{cart.length === 0 ? (
					<p> No products...</p>
				) : (
					cart.map((el) => {
						return (
							<div key={el.id}>
								<p>
									{el.name} - {el.quantity}
								</p>
								<div>
									<button
										onClick={() => addToCart({ id: el.id }, true)}
										style={{ marginRight: '10px', padding: '4px' }}
									>
										+
									</button>
									<button
										onClick={() => deleteOneFromCart(el.id)}
										style={{ marginRight: '10px', padding: '4px' }}
									>
										-
									</button>

									<button
										onClick={() => deleteAllFromCart(el.id)}
										style={{ marginRight: '10px', padding: '4px' }}
									>
										eliminar
									</button>
								</div>
							</div>
							// <CartProduct
							// 	deleteOne={deleteOne}
							// 	deleteAllProduct={deleteAllProduct}
							// 	key={el.id}
							// 	id={el.id}
							// 	quantity={el.quantity}
							// 	title={el.title}
							// 	price={parseFloat(
							// 		el.price - (promoValue / 100) * el.price
							// 	).toFixed(2)}
							// 	image={el.image}
							// />
						);
					})
				)}
			</div>
			<div className="buy-btn" onClick={buyProducts}>
				<button>Comprar</button>
				{/* <Button text="Buy" /> */}
			</div>
		</div>
	);
}
