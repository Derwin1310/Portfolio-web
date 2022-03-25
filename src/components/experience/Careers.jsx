import React from 'react';

export function Careers() {
	const careers = [
		{
			job: 'Webmaster',
			expTime: 'Dec. 2020 - Oct. 2021',
			org: 'Network Speed',
			desc: 'Development Web application using JavaScript, CSS3 and HTML5, Deploy of developments in GitHub and GIT Pages.',
		},
	];

	return (

		careers.map(({job, expTime, org, desc}) => (
			<section key={job} className='section-careers'>
				<div className='job-wrapper'>
					<h4 className='job-wrapper__job'>{job}</h4>
					<time className='job-wrapper__time'>{expTime}</time>
				</div>
	
				<div className='org-wrapper'>
					<h4 className='org-wrapper__org'>{org}</h4>
					<p className='org-wrapper__desc'>{desc}</p>
				</div>
			</section>
		))
	);
};
