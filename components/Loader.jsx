import React from 'react';
import Arrow from './icons/arrow';

export default function Loader() {
	return (
		<div className="loader">
			<Arrow color={'var(--text-color)'}></Arrow>
		</div>
	);
}
