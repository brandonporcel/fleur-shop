import React from 'react';

export default function MenuLines({ color }) {
	return (
		<svg
			width="24px"
			height="24px"
			strokeWidth="1.5"
			viewBox="0 0 24 24"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
			color={color}
		>
			<path
				d="M3 5h18M3 12h18M3 19h18"
				stroke={color}
				strokeWidth="1.5"
				strokeLinecap="round"
				strokeLinejoin="round"
			></path>
		</svg>
	);
}
