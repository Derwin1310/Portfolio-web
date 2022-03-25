import React, {Fragment} from 'react';
import {Home} from './home/Home';
import { Navbar } from './navbar/Navbar';
import { BurgerBtn } from './burger btn/BurgerBtn';
import {About} from './about/About';
import { Projects } from './projects/Projects';
import { Experience } from './experience/Experience';
import { Article } from './article/Article';
import {Contact} from './contact/Contact';
import galaxy from '../../public/assets/galaxy.png'
import { AboutResponsive } from './about-responsive/AboutResponsive';
import '../styles.css';

export function Portfolio () {
	return (
		<Fragment>
			<img className='img-bg' src={galaxy} alt='galaxy' />
			<Home />
			<Navbar />
			<About />
			<BurgerBtn /> 
			<AboutResponsive />
			<Projects />
			<Experience />
			<Article />
			<Contact />
		</Fragment> 
	);
};
