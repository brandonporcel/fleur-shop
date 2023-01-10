import React from 'react';

export default function Arrow({ direction, color }) {
	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			width="24"
			height="24"
			viewBox="0 0 24 24"
			style={{ fill: 'red' }}
		>
			{/* style=
			{{
				visibility:
					this.state.driverDetails.firstName != undefined
						? 'visible'
						: 'hidden',
			}} */}
			<path d="M16.293 9.293 12 13.586 7.707 9.293l-1.414 1.414L12 16.414l5.707-5.707z" />
		</svg>
	);
}
