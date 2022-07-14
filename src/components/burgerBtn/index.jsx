import React, { useContext } from 'react';
import { appContext } from '/src/context';
import { MenuBtn } from './styles';

export function BurgerBtn() {
    const { activeBtn, effects: { setActiveBtn } } = useContext(appContext)

    const setBtnClass = () => setActiveBtn(!activeBtn)

	return (
		<MenuBtn onClick={setBtnClass} variant={activeBtn}>
			<div />
			<div />
			<div />
		</MenuBtn>
	);
}
