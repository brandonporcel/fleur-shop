import React from 'react';

export default function Footer() {
	return (
		<footer className="footer-page">
			<nav className="footer-links">
				<ul>
					<li>Store</li>
					<li>pricacy</li>
					<li>ACCESSIBILITY</li>
					<li>TERMS</li>
				</ul>
			</nav>
			<div className="footer-copy">
				GOLF le FLEUR* REGISTERED 2022
				<br />
				ALL RIGHTS RESERVED
				<br />
				<small className="small">
					<a
						href="https://github.com/brandonporcel/fleur-shop/"
						target={'_blank'}
					>
						https://github.com/brandonporcel/fleur-shop/
					</a>
				</small>
			</div>
		</footer>
	);
}
