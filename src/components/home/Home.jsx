import {useContext} from 'react';
import {BurgerBtn} from '../burger btn/BurgerBtn';
import {langContext} from '../helpers/langContext';
import './style.css';

export function Home() {
	const {language} = useContext(langContext);
	
	const {title, resume, resumePhone} = language.home;
	
	const responsiveText = window.innerWidth >= 769 ? resume : resumePhone;

	return (
		<div id='home' className='home'>
			<header className='header'>
				<div className='header__logo-name'>
					<img
						className='header__logo'
						src='https://raw.githubusercontent.com/Derwin1310/assets-for-portfolio/main/about-imgs/logo.webp'
						alt='niceLogo'
					/>

					<h1 className='header__name'>Derwin Romero</h1>
				</div>
				<q className='header__subtitle'>{title}</q>
			</header>
			<a
				className='home__button'
				href='https://github.com/Derwin1310/assets-for-portfolio/raw/main/about-imgs/Curr%C3%ADculum.pdf'
			>
				{responsiveText}
			</a>
		</div>
	);
}
