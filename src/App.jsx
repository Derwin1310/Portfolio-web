import React from 'react';
import {Home, Navbar, BurgerBtn, About, Projects, Experience, Article, Footer} from './components';
import { LangProvider } from './components/helpers/langContext';
import './styles.css';

export function App () {

	return (
		<LangProvider>
			<Home />
			<Navbar />
			<BurgerBtn />
			<About />
			<Projects />
			<Experience />
			<Article />
			<Footer />
		</LangProvider>
	);
};
