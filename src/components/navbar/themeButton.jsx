import React, { Fragment, useEffect, useState } from 'react';
import { toogleTheme, getTheme, setTheme } from '/src/helpers';
import darkImg from '/public/assets/dark theme.svg';
import lightImg from '/public/assets/light-theme.png';
import { ThemeSelect } from './styles';

export function ThemeButton() {
	const [theme, setTheme] = useState(getTheme());

	const tema = theme === 'light' && 'light';
	const pathImg = theme === 'light' ? lightImg : darkImg;
	const text = theme === 'light' ? 'Off' : 'On';

	return (
		<Fragment>
			<ThemeSelect variant={tema} onClick={toogleTheme}>
				<span>{text}</span>
				<img src={pathImg} alt='img theme' />
			</ThemeSelect>
		</Fragment>
	);
}
