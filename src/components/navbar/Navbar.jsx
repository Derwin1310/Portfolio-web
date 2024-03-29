import React, { useContext } from 'react';
import Select from 'react-select';
import { NavLinks, ThemeButton, NavbarBg, Navigator, NavLogo, NavWrapper, Lang_Theme } from './';
import { appContext } from '/src/context';

export function Navbar() {
	const { locale, activeBtn, effects: { setLanguage } } = useContext(appContext);

	const option = [
		{ value: 'en', label: 'US' },
		{ value: 'es', label: 'ES' },
	];

	const handleLang = e => setLanguage(e.value);

	const defaultValue = option.filter(item => item.value === locale);

	return (
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
						isSearchable={false}
					/>
					<ThemeButton />
				</Lang_Theme>
			</Navigator>
		</NavbarBg>
	);
}
