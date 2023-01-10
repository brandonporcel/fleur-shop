import React from 'react';
import { useEffect, useRef, useState } from 'react';
import Arrow from './icons/arrow';

export default function ToTop() {
	const toTopBtn = useRef(null);
	useEffect(() => {
		const onScroll = () => {
			window.scrollY > 0
				? toTopBtn.current.classList.add('show')
				: toTopBtn.current.classList.remove('show');
		};
		window.removeEventListener('scroll', onScroll);
		window.addEventListener('scroll', onScroll, { passive: true });
		return () => window.removeEventListener('scroll', onScroll);
	}, []);
	return (
		<button
			className="totop"
			ref={toTopBtn}
			onClick={() => window.scrollTo(0, 0)}
		>
			{/* <Arrow direction={'up'} color={'var(--text-color)'} /> */}
			<Arrow direction={'up'} color={'var(--text-color)'} />
		</button>
	);
}
