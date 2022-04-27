import React, { useContext } from 'react';
import Select from 'react-select';
import { NavLinks } from './navLinks';
import { toogleTheme, getTheme, langContext } from '/src/helpers';
import { NavbarBg, Navigator, NavLogo, NavToggle, NavWrapper } from './styles';
import darkMode from '/public/assets/dark theme.svg';
import './style.css';
// revisar estilos y factorizar el componente

export function Navbar() {
	const { locale, setLanguage } = useContext(langContext);

	// const themeText = getTheme() === 'dark' ? 'ON' : 'OFF';

	const option = [
		{ value: 'en', label: 'US' },
		{ value: 'es', label: 'ES' },
	];

	const handleLang = e => setLanguage(e.value);

	const defaultValue = option.filter(item => item.value === locale);

	return (
		<NavbarBg>
			<Navigator>
				<NavWrapper>
					<a href='#home'>
						<NavLogo
							src='https://raw.githubusercontent.com/Derwin1310/assets-for-portfolio/main/about-imgs/logo.webp'
							alt='small logo'
						/>
					</a>

					<NavLinks />
				</NavWrapper>

				<div className='navbar__select-toggle'>
					<Select
						menuPlacement='auto'
						options={option}
						defaultValue={defaultValue}
						onChange={handleLang}
					/>
					<NavToggle onClick={toogleTheme}>
						<span className='navbar__toggle--text'>Off</span>
						<img
							className='navbar__toggle--dark'
							src={darkMode}
							alt='dark mode'
						/>
					</NavToggle>
				</div>
			</Navigator>
		</NavbarBg>
	);
}
