import Link from 'next/link';
import React from 'react';
import ProductLogo from './icons/ProductLogo';

export default function ProductPreview({
	id,
	img_slider,
	name,
	loading,
	stock,
	productRef,
}) {
	return (
		<Link href={`/product/${id}`} className="product-card-ctn" ref={productRef}>
			<div className="product-card__image">
				<img
					src={img_slider[0]?.url}
					alt={name}
					style={{ filter: loading && 'blur(2px)' }}
				/>
			</div>
			<h3 className="product-card-title">{name}</h3>
			<div className="product-card-icon">
				<ProductLogo />
			</div>
			{stock <= 15 ? (
				<div className="marquee">
					<div>
						<span>{`*Only ${stock} In Stock*`}</span>
						<span>{`*Only ${stock} In Stock*`}</span>
					</div>
				</div>
			) : (
				''
			)}
		</Link>
	);
}
