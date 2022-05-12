import React from 'react';
import { Home, Navbar, BurgerBtn, About, Projects, Experience, Article, Footer } from './components';
import { ContextProvider } from './context';
import { Theme } from './globalStyles';
import './styles.css';

export function App() {

	return (
		<ContextProvider>
			<Theme id='theme' >
				<Home />
				<Navbar />
				<About />
				<Projects />
				<Experience />
				<Article />
				<Footer />
			</Theme>
		</ContextProvider>
	);
};
