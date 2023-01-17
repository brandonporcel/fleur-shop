import React from 'react';
import Arrow from './icons/Arrow';

export default function Loader() {
	return (
		<div className="loader">
			<Arrow color={'var(--text-color)'}></Arrow>
		</div>
	);
}
