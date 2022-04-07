import React from 'react';
import { langContext } from '../helpers';
import { useContext } from 'react';

export function Careers() {
	const {language} = useContext(langContext);

	const {careers} = language.experience;

	return (
		careers.map(({job, time, org, desc}) => (
			<section key={job} className='section-careers'>
				<div className='job-wrapper'>
					<h4 className='job-wrapper__job'>{job}</h4>
					<time>{time}</time>
				</div>
				
				<div>
					<h4 className='organization'>{org}</h4>
					<p>{desc}</p>
				</div>
			</section>
		))
	);
};
