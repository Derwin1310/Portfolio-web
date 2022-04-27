import React from 'react';
import { ListProjects } from './listProjects';
import { Subtitles } from '/src/globalStyles';
import { SectionsStyles } from '/src/helpers';
import './style.css';

export function Projects() {
	return (
		<SectionsStyles name='projects'>
			<Subtitles>Projects</Subtitles>
			<ListProjects />
		</SectionsStyles>
	);
}
