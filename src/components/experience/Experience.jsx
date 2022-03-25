import React from 'react';
import {Careers} from './Careers';
import { Education } from './Education';
import './styles/experience.css';

export function Experience () {
	return (
		<div className='background-color'>
			<div id='experience' className='section'>
				<h2 className='subtitle'>Experience</h2>

				<q className='quote'>
					<blockquote>
						Protons give an atom it's identify, electrons its personality.
					</blockquote>
					<cite>
						-Bill Bryson, A shot history of nearly everything
					</cite>
				</q>
				<h3 className='careers-edu'>Careers</h3>
				<Careers />

				<h3 className='careers-edu'>Education</h3>
				<Education />
			</div>
		</div>
	);
};
