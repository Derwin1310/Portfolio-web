import React, { Fragment, useContext, useState } from 'react';
import Select from 'react-select';
import { BurgerBtn } from './burgerBtn';
import { NavLinks } from './navLinks';
import { ThemeButton } from './themeButton';
import { appContext } from '/src/context';
import { NavbarBg, Navigator, NavLogo, NavWrapper, Lang_Theme } from './styles';

export function Navbar() {
	const { locale, setLanguage, activeBtn } = useContext(appContext);

	const option = [
		{ value: 'en', label: 'US' },
		{ value: 'es', label: 'ES' },
	];

	const handleLang = e => setLanguage(e.value);

	const defaultValue = option.filter(item => item.value === locale);

	return (
		<Fragment>
			<BurgerBtn />

			<NavbarBg>
				<Navigator variant={activeBtn}>
					<NavWrapper>
						<a href='#home'>
							<NavLogo
								src='https://raw.githubusercontent.com/Derwin1310/assets-for-portfolio/main/about-imgs/logo.webp'
								alt='small logo'
							/>
						</a>

						<NavLinks />
					</NavWrapper>

					<Lang_Theme>
						<Select
							menuPlacement='auto'
							options={option}
							defaultValue={defaultValue}
							onChange={handleLang}
						/>
						<ThemeButton />
					</Lang_Theme>
				</Navigator>
			</NavbarBg>
		</Fragment>
	);
}
