import React from 'react';
import {Careers} from './Careers';
import { Education } from './Education';
import { langContext } from '../helpers';
import { useContext } from 'react';
import './style.css';


export function Experience () {
	const {language} = useContext(langContext);

	const {quote, cite, courses, career, title} = language.experience;

	return (
		<div id='experience' className='section'>
			<h2 className='subtitle'>{title}</h2>

			<q className='quote'>
				<blockquote>{quote}</blockquote>
				<cite>{cite}</cite>
			</q>

			<h3 className='careers-education'>{career}</h3>
			<Careers />

			<h3 className='careers-education'>{courses}</h3>
			<Education />
		</div>
	);
};
