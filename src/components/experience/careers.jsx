import React, { Fragment, useContext } from 'react';
import { langContext } from '/src/helpers';
import { CourseAndJob, Organization, Careers_Exp, SectionTitle } from './styles';

export function Careers() {
	const { language } = useContext(langContext);

	const { careers, career } = language.experience;

	return (
		<Fragment>
			<SectionTitle>{career}</SectionTitle>
			{careers.map(({ job, time, org, desc }) => (
				<article key={job}>
					<Careers_Exp variant='border-b'>
						<div>
							<CourseAndJob>{job}</CourseAndJob>
							<time>{time}</time>
						</div>

						<div>
							<Organization>{org}</Organization>
							<p>{desc}</p>
						</div>
					</Careers_Exp>
				</article>
			))}
		</Fragment>
	);
}
