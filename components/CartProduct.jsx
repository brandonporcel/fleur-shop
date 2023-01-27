import Link from 'next/link';
import React from 'react';
import { formatPrice } from '../helpers';
export default function CartProduct({
	title,
	quantity,
	price,
	img,
	stock,
	addToCart,
	deleteOneFromCart,
	deleteAllFromCart,
	id,
}) {
	return (
		<div className="prod-cart-ctn">
			<div className="prod-cart-img-ctn">
				<img src={img} alt={title} />
			</div>
			<div className="prod-cart-info-ctn">
				<Link href={`/product/${id}`}>
					<h5>{title}</h5>
				</Link>
				<div className="prod-cart-actions-ctn">
					<button onClick={() => deleteOneFromCart(id)} className="cart-button">
						-
					</button>
					<span className="prod-cart-quantity">{quantity}</span>
					<button
						onClick={() => addToCart({ id })}
						className="cart-button"
						disabled={quantity >= stock ? true : false}
					>
						+
					</button>
					<button
						onClick={() => deleteAllFromCart(id)}
						className="cart-button delete"
					>
						x
					</button>
				</div>
				<h6 className="final-price-one-prod">
					{formatPrice(price * quantity)}
				</h6>
			</div>
		</div>
	);
}
