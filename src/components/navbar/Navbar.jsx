import darkMode from '../../../public/assets/dark theme.svg';
import {NavLinks} from './NavLinks';
import Select from 'react-select'
import './styles/navbar.css';


export function Navbar () {
	const option = [
		{value: 'en', label: 'US'},
		{value: 'es', label: 'ES'}
	];

	const defaultLang = localStorage.getItem('lang') && JSON.parse(localStorage.getItem('lang')) || option[1];
	
	const handleLang = (e) => localStorage.setItem('lang', JSON.stringify(e));

	return (
		<div className='navbar-bg'>
			<nav className='navbar'>
				<ul className='navbar__wrapper'>
					<a href='#home'>
						<img
							className='navbar__logo'
							src='https://raw.githubusercontent.com/Derwin1310/assets-for-portfolio/main/about-imgs/logo.webp'
							alt='small logo'
						/>
					</a>
					<NavLinks />
				</ul>

				<div className='navbar__select-toggle'>
					<Select options={option} defaultValue={defaultLang} onChange={handleLang} />
					<div className='navbar__toggle'>
						<span className='navbar__toggle--text'>Off</span>
						<img
							className='navbar__toggle--dark'
							src={darkMode}
							alt='dark mode'
						/>
					</div>
				</div>
			</nav>
		</div>
	);
};
