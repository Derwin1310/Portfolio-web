import React, {Fragment} from 'react';
import {Home} from './home/Home';
import { Navbar } from './navbar/Navbar';
import { BurgerBtn } from './burger btn/BurgerBtn';
import {About} from './about/About';
import { Projects } from './projects/Projects';
import { Experience } from './experience/Experience';
import { Article } from './article/Article';
import {Contact} from './contact/Contact';
import { LangProvider } from './helpers/langContext';
import '../styles.css';

export function App () {

	// const [bg, setBg] = useState()

	return (
		<Fragment>
			<LangProvider>
				{/* <img className='img-bg' src={galaxy} alt='galaxy' style={{height: innerHeight}} /> */}
				<img className='img-bg' src='https://raw.githubusercontent.com/Derwin1310/assets-for-portfolio/main/about-imgs/galaxyWallpaper.webp' alt='galaxy' />
				{/* <div class="space stars1"></div>
  				<div class="space stars2"></div>
  				<div class="space stars3"></div> */}
				<Home />
				<Navbar />
				<BurgerBtn />
				<About />
				<Projects />
				<Experience />
				<Article />
				<Contact />
			</LangProvider>
		</Fragment> 
	);
};
