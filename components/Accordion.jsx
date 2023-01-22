import React, { useState } from 'react';
import accordion from '../styles/Accordion.module.css';

export default function Accordion({ items }) {
	const [active, setActive] = useState();
	const handleClick = (name) => setActive(name === active ? null : name);

	return (
		<div className={accordion.container}>
			{items.map((item, i) => {
				let isActive = active === item.name;
				return (
					<div key={i}>
						<div
							className={accordion.header}
							onClick={() => handleClick(item.name)}
						>
							{item.name}
							<p
								className={accordion.headerIcon}
								style={{
									transform: `rotate(${isActive ? '-180deg' : '0deg)'}`,
									transition: 'all 0.2s',
								}}
							>
								{!isActive ? '+' : '-'}
							</p>
						</div>

						<div
							className={accordion.content}
							style={{
								height: `${isActive ? 100 : 0}px`,
							}}
						>
							<div className={accordion.inner} id={item.name}>
								{item.content}
							</div>
						</div>
					</div>
				);
			})}
		</div>
	);
}
