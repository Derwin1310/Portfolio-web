import React, { useContext } from 'react';
import { SectionIcons } from './sectionIcons';
import { TechIcons } from './techIcons';
import { langContext, SectionsStyles } from '/src/helpers';
import { Subtitles } from '/src/globalStyles.js';
import { Desc, DescName, DescSpan } from './styles';

export function About() {
	const { language } = useContext(langContext);

	const { title, technologies, blueText } = language.about;

	return (
		<SectionsStyles name='about'>
			<Subtitles>{title}</Subtitles>

			<SectionIcons />

			<Desc>
				<DescName>Derwin Romero</DescName>
				{technologies}
				<DescSpan>{blueText}</DescSpan>
			</Desc>

			<TechIcons />
		</SectionsStyles>
	);
}
