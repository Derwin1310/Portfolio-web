import React from 'react';
import {Home, Navbar, BurgerBtn, About, Projects, Experience, Article, Footer} from './components';
import { LangProvider } from './components/helpers';
import './styles.css';

export function App () {

	return (
		<LangProvider>
			<div id='theme' className='theme theme--animation'>
				<Home />
				<Navbar />
				<BurgerBtn />
				<About />
				<Projects />
				<Experience />
				<Article />
				<Footer />
			</div>
		</LangProvider>
	);
};
