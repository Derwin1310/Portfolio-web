import React from 'react';
import { langContext } from '../helpers/langContext';
import { useContext } from 'react';

export function Careers() {
	const {language} = useContext(langContext);

	const {careers} = language.experience;

	return (
		careers.map(({job, time, org, desc}) => (
			<section key={job} className='section-careers'>
				<div className='job-wrapper'>
					<h4 className='job-wrapper__job'>{job}</h4>
					<time className='job-wrapper__time'>{time}</time>
				</div>
	
				<div className='org-wrapper'>
					<h4 className='org-wrapper__org'>{org}</h4>
					<p className='org-wrapper__desc'>{desc}</p>
				</div>
			</section>
		))
	);
};
