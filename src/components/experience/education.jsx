import React, { Fragment, useContext } from 'react';
import { langContext } from '/src/helpers';
import { CourseAndJob, Careers_Exp, SectionTitle } from './styles';

export function Education() {
	const { language } = useContext(langContext);

	const { education, courses } = language.experience;

	return (
		<Fragment>
			<SectionTitle>{courses}</SectionTitle>
			{education.map(({ name, time, desc }) => (
				<article key={name}>
					<Careers_Exp>
						<div>
							<CourseAndJob>{name}</CourseAndJob>
							<time>{time}</time>
						</div>

						<p>{desc}</p>
					</Careers_Exp>
				</article>
			))}
		</Fragment>
	);
}
