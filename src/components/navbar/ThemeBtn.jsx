import React, { useContext } from 'react';
import darkImg from '/public/assets/dark theme.svg';
import lightImg from '/public/assets/light-theme.png';
import { appContext } from '/src/context';
import { ThemeSelect } from './styles';

export function ThemeButton() {
	const { defaultTheme, effects: { changeTheme } } = useContext(appContext);

	const pathImg = defaultTheme === 'light' ? lightImg : darkImg;
	const text = defaultTheme === 'light' ? 'Off' : 'On';

	return (
		<ThemeSelect variant={defaultTheme === 'light'} onClick={changeTheme}>
			<span>{text}</span>
			<img src={pathImg} alt='img theme' />
		</ThemeSelect>
	);
}
