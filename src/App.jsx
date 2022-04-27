import React from 'react';
import { Home, Navbar, BurgerBtn, About, Projects, Experience, Article, Footer } from './components';
import { LangProvider } from './helpers';
import { Theme } from './globalStyles';
import './styles.css';

export function App() {

	return (
		<LangProvider>
			<Theme id='theme' >
				<Home />
				<Navbar />
				<BurgerBtn />
				<About />
				<Projects />
				<Experience />
				<Article />
				<Footer />
			</Theme>
		</LangProvider>
	);
};
