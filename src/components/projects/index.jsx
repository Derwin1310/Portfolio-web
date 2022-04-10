import React from 'react';
import { ListProjects } from './ListProjects';
import { Subtitles } from '../../globalStyles';
import { Section } from '../helpers/Section';
import './style.css';

export function Projects () {

	return (
		<Section name='projects'>
			<Subtitles>Projects</Subtitles>
			<ListProjects />
		</Section>
	);
};
