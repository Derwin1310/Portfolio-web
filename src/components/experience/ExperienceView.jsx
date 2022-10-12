import React, { useContext } from 'react';
import { Education, Jobs, Quote } from './';
import { SectionsStyles } from '/src/helpers';
import { appContext } from '/src/context'
import { Subtitles } from '/src/globalStyles';

export function ExperienceView() {
	const { language } = useContext(appContext);
	const { quote, cite, title } = language.experience;

	return (
		<SectionsStyles name='experience'>
			<Subtitles>{title}</Subtitles>

			<Quote>
				<blockquote>{quote}</blockquote>
				<cite>{cite}</cite>
			</Quote>

			<Jobs />
			<Education />
		</SectionsStyles>
	);
}
