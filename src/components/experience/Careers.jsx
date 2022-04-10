import React, { Fragment } from 'react';
import { langContext } from '../helpers';
import { useContext } from 'react';
import { CourseAndJob, Organization, SectionExp, SectionTitle} from './styles';

export function Careers() {
	const {language} = useContext(langContext);

	const {careers, career} = language.experience;

	return (
		<Fragment>
			<SectionTitle>{career}</SectionTitle>
			{
				careers.map(({job, time, org, desc}) => (
					<article key={job}>
						<SectionExp variant="border-b">
							<div>
								<CourseAndJob>{job}</CourseAndJob>
								<time>{time}</time>
							</div>
							
							<div>
								<Organization>{org}</Organization>
								<p>{desc}</p>
							</div>
						</SectionExp>
					</article>
				))
			}
		</Fragment>
	);
};
