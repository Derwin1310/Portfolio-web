import React from 'react';
import { locales } from '../locales';
import {Careers} from './Careers';
import { Education } from './Education';
import './styles/experience.css';


export function Experience () {
	const {quote, cite} = locales.experience;

	
	return (
		<div className='background-color'>
			<div id='experience' className='section'>
				<h2 className='subtitle'>Experience</h2>

				<q className='quote'>
					<blockquote>
						{quote}
					</blockquote>
					<cite>
						{cite}
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
