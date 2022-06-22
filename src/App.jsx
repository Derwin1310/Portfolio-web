import React from 'react';
import { Home, Navbar, About, Projects, Experience, Article, Footer } from '/src/components';
import { ContextProvider } from '/src/context';
import { Theme } from '/src/globalStyles';
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