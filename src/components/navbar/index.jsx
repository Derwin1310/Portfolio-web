import React, { useContext } from 'react';
import Select from 'react-select';
import { NavLinks } from './navLinks';
import { ThemeButton } from './themeButton';
import { langContext } from '/src/helpers';
import { NavbarBg, Navigator, NavLogo, NavWrapper } from './styles';
import './style.css';
// revisar estilos y factorizar el componente

export function Navbar() {
	const { locale, setLanguage } = useContext(langContext);

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
					<ThemeButton />
				</div>
			</Navigator>
		</NavbarBg>
	);
}
