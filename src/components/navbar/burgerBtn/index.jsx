import React, { useContext } from 'react';
import { appContext } from '/src/context';
import './style.css';

export function BurgerBtn() {
    const { activeBtn, setActiveBtn } = useContext(appContext)

    const setBtnClass = () => setActiveBtn(!activeBtn)

	return (
		<div onClick={setBtnClass} className={`burger-btn ${activeBtn ? 'opened' : ''}`}>
			<div className='burger-btn__line' />
			<div className='burger-btn__line' />
			<div className='burger-btn__line' />
		</div>
	);
}
