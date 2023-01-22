// import { createContext, useState } from 'react';
// const CartContext = createContext();
// const initialValues = {
// 	cart: [
// 		{
// 			pepe: 'asda',
// 		},
// 	],
// 	actions: {},
// };

// const CartProvider = ({ children }) => {
// 	const [cart, setCart] = useState([]);
// 	const addToCart = () => {};
// 	const deleteFromCart = () => {};
// 	const data = { cart, addToCart, deleteFromCart };
// 	<CartContext.Provider value={data}>{children}</CartContext.Provider>;
// };

// export default CartContext;
// export { CartProvider };
import React, { createContext } from 'react';

const CartContext = createContext();
const CartProvider = ({ children }) => {
	const data = { counter };
	return <CartContext.Provider value={data}>{children}</CartContext.Provider>;
};

export default CartContext;
export { CartProvider };
