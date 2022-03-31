import { BurgerBtn } from '../burger btn/BurgerBtn';
import './styles/home.css';

export function Home () {
	const responsiveText = window.innerWidth >= 769
		? "Resume" 
		: "Let's get in touch"

	return	(
		<div id='home' className='home'>
			<header className='header'>
				<div className='header__logo-name'>
						<img className='header__logo' src='https://raw.githubusercontent.com/Derwin1310/assets-for-portfolio/main/about-imgs/logo.webp' alt='niceLogo' />
				
					<h1 className='header__name'>Derwin Romero</h1>
				</div>
				<q className='header__subtitle'>
					Frontend Developer: code faster than you talk, and learn more than you
					work
				</q>
			</header>
			<a className='home__button' href='https://github.com/Derwin1310/assets-for-portfolio/raw/main/about-imgs/Curr%C3%ADculum.pdf'>{responsiveText}</a>
		</div>
	);
};

