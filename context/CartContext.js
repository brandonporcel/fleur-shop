import { createContext, useEffect, useState } from 'react';
const CartContext = createContext();

const CartProvider = ({ children }) => {
	const [cart, setCart] = useState([]);

	useEffect(() => {
		let cartt = localStorage.getItem('cart');
		cartt && setCart(JSON.parse(cartt));
	}, []);
	const getAllProducts = (prodd) => setCart(prodd);

	const addToCart = (newProduct, oneMore) => {
		const addOneProdQuant = oneMore ? true : false;
		const itemInCart = addOneProdQuant
			? cart.find((el) => el.id === newProduct.id)
			: cart.find((el) => el.id === newProduct.id);
		setCart(() =>
			itemInCart
				? addOneProdQuant
					? cart.map((el) =>
							el.id === newProduct.id
								? { ...el, quantity: el.quantity + 1 }
								: el
					  )
					: cart.map((el) =>
							el.id === newProduct.id
								? { ...el, quantity: el.quantity + 1 }
								: el
					  )
				: [...cart, { ...newProduct, quantity: 1 }]
		);
		ls();
	};

	const ls = () => localStorage.setItem('cart', JSON.stringify(cart));
	const deleteOneFromCart = (id) => {
		const productToDelete = cart.find((el) => el.id === id);
		setCart(() =>
			productToDelete.quantity > 1
				? cart.map((el) =>
						el.id === id
							? {
									...el,
									quantity: el.quantity - 1,
							  }
							: el
				  )
				: cart.filter((el) => el.id !== id)
		);
		ls();
	};

	const deleteAllFromCart = (id) => {
		setCart(() => cart.filter((el) => el.id !== id));
		ls();
	};

	const buyProducts = () => {
		alert('Thanks for your order!');
		setCart([]);
		ls();
	};

	const data = {
		cart,
		addToCart,
		deleteOneFromCart,
		getAllProducts,
		deleteAllFromCart,
		buyProducts,
	};

	return <CartContext.Provider value={data}>{children}</CartContext.Provider>;
};

export default CartContext;
export { CartProvider };
