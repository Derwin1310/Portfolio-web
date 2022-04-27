import React from 'react';
import { toogleTheme, getTheme, setTheme } from '/src/helpers';
import darkMode from '/public/assets/dark theme.svg';
import { NavToggle } from './styles';

export function ThemeButton() {

	const themeText = document.documentElement.getAttribute('data-color-theme', 'dark') === 'dark' ? 'On' : 'Off'
	// const themeText = setTheme('dark') ? 'On' : 'Off'
	// const themeText = toogleTheme ? 'ON' : 'OFF';
	// const textTheme = setTheme === 'light' ? 'light' : 'dark';
	// const textTheme = localStorage.getItem('dark') ? 'si' : 'no';
	/* const textTheme = (theme) => {
		if(theme === 'dark') {
			document.documentElement.setAttribute('data-color-theme', theme);
			return 'ON'
		}
		return 'Off'
	} */

	return (
		<NavToggle onClick={toogleTheme}>
			<span className='navbar__toggle--text'>{themeText}</span>
			<img className='navbar__toggle--dark' src={darkMode} alt='dark mode' />
		</NavToggle>
	);
}
