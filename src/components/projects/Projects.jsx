import React from 'react';
import { ListProjects } from './ListProjects';
import './style.css';

export function Projects () {

	return (
		<div className='background-color'>
			<div id='projects' className='section'>

				<h2 className='subtitle'>Projects</h2>

				<ListProjects />
			</div>
		</div>
	);
};
