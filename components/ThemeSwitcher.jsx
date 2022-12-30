import { useState, useEffect } from 'react';

export default () => {
	const [theme, setTheme] = useState('dark');

	function changeTheme(themee) {
		localStorage.setItem('theme', themee);
		if (themee === 'dark') {
			document.documentElement.style.setProperty('--bg-color', '#1E1E1E');
			document.documentElement.style.setProperty('--text-color', '#fff');
		} else {
			document.documentElement.style.setProperty('--bg-color', '#FFFAED');
			document.documentElement.style.setProperty('--text-color', '#000');
		}
		setTheme(themee);
	}

	useEffect(() => {
		const LSTheme = localStorage.getItem('theme');
		LSTheme === null ? changeTheme(theme) : changeTheme(LSTheme);
	}, []);

	return (
		<div>
			<button onClick={() => changeTheme('light')} className="theme-btn">
				<p className="theme-text">light</p>
			</button>
			<span className="theme-text">/</span>
			<button onClick={() => changeTheme('dark')} className="theme-btn">
				<p className="theme-text">dark</p>
			</button>
		</div>
	);
};
