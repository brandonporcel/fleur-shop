import { useState, useEffect } from 'react';

export default () => {
	const [theme, setTheme] = useState('dark');

	function changeTheme(themee) {
		localStorage.setItem('theme', themee);
		if (themee === 'dark') {
			document.documentElement.style.setProperty('--bg-color', '#1E1E1E');
			document.documentElement.style.setProperty('--text-color', '#fff');
			document.documentElement.style.setProperty('--bg-hover', '#00000066');
		} else {
			document.documentElement.style.setProperty('--bg-color', '#FFFAED');
			document.documentElement.style.setProperty('--text-color', '#000');
			document.documentElement.style.setProperty('--bg-hover', '#ffffff66');
		}
		setTheme(themee);
	}

	useEffect(() => {
		const LSTheme = localStorage.getItem('theme');
		LSTheme === null ? changeTheme(theme) : changeTheme(LSTheme);
	}, []);

	return (
		<div>
			<button onClick={() => changeTheme('light')} className="noBtnStyles">
				<p className="header-nav-item">light</p>
			</button>
			<span style={{ userSelect: 'none' }}>/</span>
			<button onClick={() => changeTheme('dark')} className="noBtnStyles">
				<p className="header-nav-item">dark</p>
			</button>
		</div>
	);
};
