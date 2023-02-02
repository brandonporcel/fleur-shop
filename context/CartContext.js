import { createContext, useContext, useEffect, useState } from 'react';
import GoogleUserContext from './GoogleUser.Context';
const CartContext = createContext();

const CartProvider = ({ children }) => {
	const [cart, setCart] = useState([]);
	const [cartVisible, setCartVisible] = useState(false);
	const { money, setMoney, session } = useContext(GoogleUserContext);

	const getQuantityFromProd = (id) => {
		const prod = cart.find((prod) => prod.id === id);
		return prod === undefined ? 0 : prod.quantity;
	};

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
	// subtract one item
	const deleteOneFromCart = (id) => {
		const productToDelete = cart.find((el) => el.id === id);

		setCart(() =>
			productToDelete.quantity > 1
				? cart?.map((el) =>
						el.id === id ? { ...el, quantity: el.quantity - 1 } : el
				  )
				: cart.filter((el) => el.id !== id)
		);
		localStorage.setItem('cart', JSON.stringify([]));
	};
	// delete one selected product
	const deleteAllFromCart = (id) => {
		setCart(() => cart.filter((el) => el.id !== id));
		localStorage.setItem('cart', JSON.stringify([]));
	};

	const finalPriceCart = () =>
		cart?.reduce((acc, prod) => acc + prod?.quantity * prod?.price, 0);

	const buyProducts = () => {
		if (session) {
			money < finalPriceCart() && alert('You have no enough money :(');
			alert(`Great purchase ${session.user.name}!. Arrives in 7 business days`);
			setMoney(money - finalPriceCart());
		} else {
			alert('Thanks for your order☺!!');
		}
		setCart([]);
		setCartVisible(false);
		localStorage.setItem('cart', JSON.stringify([]));
	};

	// local storage
	useEffect(() => {
		let cartt = localStorage.getItem('cart');
		cartt ? setCart(JSON.parse(cartt)) : setCart([]);
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
		getQuantityFromProd,
	};

	return <CartContext.Provider value={data}>{children}</CartContext.Provider>;
};

export default CartContext;
export { CartProvider };
