import { useContext } from 'react';
import ProductsLayout from '../components/ProductsLayout.jsx';
import CartContext from '../context/CartContext.js';

export default function Shop() {
	// const { cart } = useContext(CartContext);

	return <ProductsLayout></ProductsLayout>;
}
