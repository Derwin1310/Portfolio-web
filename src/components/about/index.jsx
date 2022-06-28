import React, { useContext } from 'react';
import { SectionIcons } from './sectionIcons';
import { TechIcons } from './techIcons';
import { appContext } from '/src/context'
import { SectionsStyles } from '/src/helpers';
import { Subtitles } from '/src/globalStyles.js';
import { Desc } from './styles';

export function About() {
	const { language } = useContext(appContext);

	const { title, shortDesc, spanDesc } = language.about;

	return (
		<SectionsStyles name='about'>
			<Subtitles>{title}</Subtitles>

			<SectionIcons />

			<Desc>
				<h4>Derwin Romero</h4>
				{shortDesc}
				<span>{spanDesc}</span>
			</Desc>

			<TechIcons />
		</SectionsStyles>
	);
}
