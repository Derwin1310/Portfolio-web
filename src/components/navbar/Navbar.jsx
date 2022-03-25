import darkMode from '../../../public/assets/dark theme.svg';
import { NavLinks } from './NavLinks';
import './styles/navbar.css';

export const Navbar = () => {
	return (
		<div className='navbar-bg'>
			<nav className='navbar'>
				<ul className='navbar__wrapper'>
					<img className='navbar__logo' src='https://raw.githubusercontent.com/Derwin1310/assets-for-portfolio/main/about-imgs/logo.webp' alt='small logo' />
					<NavLinks />
				</ul>

				<div className='navbar__select-toggle'>
					<select className='navbar__select'>
						<option value=''>US</option>
						<option value=''>ES</option>
					</select>
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
