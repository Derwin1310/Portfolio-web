import React, { Fragment, useContext } from 'react';
import { appContext } from '/src/context'
import { CourseAndJob, Organization, JobsAndEducation, SectionTitle } from './';

export function Jobs() {
	const { language } = useContext(appContext);
	const { jobsList, jobs } = language.experience;

	return (
		<Fragment>
			<SectionTitle>{jobs}</SectionTitle>
			{jobsList.map(({ job, time, org, desc }) => (
				<JobsAndEducation key={job} variant>
					<div>
						<CourseAndJob>{job}</CourseAndJob>
						<time>{time}</time>
					</div>

					<div>
						<Organization>{org}</Organization>
						<p>{desc}</p>
					</div>
				</JobsAndEducation>
			))}
		</Fragment>
	);
}
