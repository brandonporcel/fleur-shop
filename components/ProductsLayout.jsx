import Loader from './Loader';
import ProductsContext from '../context/Products.Context';
import { useContext, useState } from 'react';
import ButtonStyled from './Button';
import ProductPreview from './ProductPreview';
import { getRandomEmoji } from '../helpers';
export default function ProductsLayout({ children, queryy }) {
	const {
		loading,
		productRef,
		nextPage,
		prevPage,
		counterPagination,
		maxIndex,
		sortByPrice,
		mostRecentsProds,
		results,
		searchBarProps,
	} = useContext(ProductsContext);

	return (
		<section className="products-wrapper">
			<nav className="products-header-nav">
				<div className="products-header-btn-actions-ctn">
					<ButtonStyled onClick={mostRecentsProds}>Most Recent</ButtonStyled>
					<ButtonStyled onClick={() => sortByPrice('mayor')}>
						Highest Price
					</ButtonStyled>
					<ButtonStyled onClick={() => sortByPrice('minor')}>
						Lowest Price
					</ButtonStyled>
				</div>
				<div>
					<input
						type="search"
						className="styled-input"
						placeholder="Search Product"
						{...searchBarProps}
					/>
				</div>
			</nav>

			<div className="products-ctnn">
				{loading ? (
					<Loader />
				) : results.length === 0 ? (
					<p>
						No results found <br /> {getRandomEmoji()}
					</p>
				) : (
					results.map((prod) => (
						<ProductPreview
							key={prod.id}
							id={prod.id}
							img_slider={prod.img_slider}
							name={prod.name}
							loading={loading}
							stock={prod.stock}
							productRef={productRef}
						></ProductPreview>
					))
				)}
			</div>
			{loading || results.length === 0 || maxIndex === 1 ? (
				''
			) : (
				<>
					<ButtonStyled onClick={prevPage}>⬅</ButtonStyled>
					<ButtonStyled onClick={nextPage}>➡</ButtonStyled>
					<div>
						<small className="small">
							{counterPagination} - {maxIndex}
						</small>
					</div>
				</>
			)}
			{children}
		</section>
	);
}
