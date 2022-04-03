import darkMode from '../../../public/assets/dark theme.svg';
import {NavLinks} from './NavLinks';
import Select from 'react-select'
import { useContext } from 'react';
import { langContext } from '../helpers/langContext';
import './style.css';

export function Navbar () {
	const {locale, setLanguage} = useContext(langContext);

	const option = [
		{value: 'en', label: 'US'},
		{value: 'es', label: 'ES'}
	];
	
	const handleLang = (e) => setLanguage(e.value);

	const defaultValue = option.filter(item => item.value === locale);

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
					<Select menuPlacement='auto' options={option} defaultValue={defaultValue} onChange={handleLang} />
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
