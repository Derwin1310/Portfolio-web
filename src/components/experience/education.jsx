import React, { Fragment, useContext } from 'react';
import { appContext } from '/src/context'
import { CourseAndJob, JobsAndEducation, SectionTitle } from './styles';

export function Education() {
	const { language } = useContext(appContext);

	const { educationList, education } = language.experience;

	return (
		<Fragment>
			<SectionTitle variant='divisorLine'>{education}</SectionTitle>
			{educationList.map(({ course, time, desc }) => (
				<JobsAndEducation key={course}>
					<div>
						<CourseAndJob>{course}</CourseAndJob>
						<time>{time}</time>
					</div>

					<p>{desc}</p>
				</JobsAndEducation>
			))}
		</Fragment>
	);
}
