import React, { useContext } from 'react';
import { Careers } from './careers';
import { Education } from './education';
import { langContext, SectionsStyles } from '/src/helpers';
import { Subtitles } from '/src/globalStyles';
import { Quote } from './styles';

export function Experience() {
	const { language } = useContext(langContext);

	const { quote, cite, title } = language.experience;

	return (
		<SectionsStyles name='experience'>
			<Subtitles>{title}</Subtitles>

			<Quote>
				<blockquote>{quote}</blockquote>
				<cite>{cite}</cite>
			</Quote>

			<Careers />

			<Education />
		</SectionsStyles>
	);
}
