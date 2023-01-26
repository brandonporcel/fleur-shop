import { createContext, useEffect, useState } from 'react';
const CartContext = createContext();

const CartProvider = ({ children }) => {
	const [cart, setCart] = useState([]);
	const [cartVisible, setCartVisible] = useState(false);

	const addToCart = (newProduct) => {
		const itemInCart = cart.some((prod) => prod.id === newProduct.id);
		setCart(() => {
			return itemInCart
				? cart?.map((el) =>
						el.id === newProduct.id ? { ...el, quantity: el.quantity + 1 } : el
				  )
				: [...cart, { ...newProduct, quantity: 1 }];
		});
	};

	const deleteOneFromCart = (id) => {
		const productToDelete = cart.find((el) => el.id === id);
		setCart(() =>
			productToDelete.quantity > 1
				? cart?.map((el) =>
						el.id === id
							? {
									...el,
									quantity: el.quantity - 1,
							  }
							: el
				  )
				: cart.filter((el) => el.id !== id)
		);
	};

	const deleteAllFromCart = (id) => {
		setCart(() => cart.filter((el) => el.id !== id));
	};
	const finalPriceCart = () =>
		cart?.reduce((acc, prod) => acc + prod?.quantity * prod?.price, 0);
	const buyProducts = () => {
		alert('Thanks for your order!!');
		setCartVisible(false);
		setCart([]);
		localStorage.setItem('cart', JSON.stringify([]));
	};

	const getSpecificProdData = (id) => {
		const prod = cart.find((prod) => prod.id === id);
		return prod === undefined ? 0 : prod.quantity;
	};

	useEffect(() => {
		let cartt = localStorage.getItem('cart');
		cartt ? setCart(JSON.parse(cartt)) : setCart([{}]);

		// setCart(JSON.parse(localStorage.getItem('cart')));
	}, []);
	useEffect(() => {
		cart?.length > 0 && localStorage.setItem('cart', JSON.stringify(cart));
	}, [cart]);

	const data = {
		cart,
		cartVisible,
		addToCart,
		deleteOneFromCart,
		deleteAllFromCart,
		buyProducts,
		setCartVisible,
		finalPriceCart,
		getSpecificProdData,
	};

	return <CartContext.Provider value={data}>{children}</CartContext.Provider>;
};

export default CartContext;
export { CartProvider };
