import React from 'react'
import {
	HomeView,
	BurgerBtn,
	Navbar,
	AboutView,
	ProjectsView,
	ExperienceView,
	ArticleView,
	Footer,
	ModalView,
} from '/src/components'
import { ContextProvider } from '/src/context'
import { Theme } from '/src/globalStyles'
import './styles.css'

export function App() {
	return (
		<ContextProvider>
			<Theme id='theme'>
				<HomeView />
				<BurgerBtn />
				<Navbar />
				<AboutView />
				<ProjectsView />
				<ExperienceView/>
				<ArticleView />
				<ModalView />
				<Footer />
			</Theme>
		</ContextProvider>
	)
}
