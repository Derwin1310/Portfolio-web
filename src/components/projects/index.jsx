import React from 'react';
import { ListProjects } from './ListProjects';
import { Sections, Subtitles } from '../../globalStyles';
import './style.css';

export function Projects () {

	return (
		<div className='bg-color2'>
			<Sections id='projects'>
				<Subtitles>Projects</Subtitles>

				<ListProjects />
			</Sections>
		</div>
	);
};
