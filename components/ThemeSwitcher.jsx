import { useState, useEffect } from 'react';

export default () => {
	const [theme, setTheme] = useState(null);

	let t1 = 'light',
		t2 = 'dark';
	function changeTheme(themee) {
		localStorage.setItem('theme', themee);
		if (themee === t2) {
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
		LSTheme === null
			? window.matchMedia('(prefers-color-scheme: light)').matches
				? changeTheme(t1)
				: changeTheme(t2)
			: changeTheme(LSTheme);
	}, []);

	return (
		<>
			{theme === t1 ? (
				<button onClick={() => changeTheme(t2)} className="noBtnStyles">
					<p className="header-nav-item">t/dark</p>
				</button>
			) : (
				<button onClick={() => changeTheme(t1)} className="noBtnStyles">
					<p className="header-nav-item">t/light</p>
				</button>
			)}
		</>
	);
};
