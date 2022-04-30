import React, { useContext } from 'react';
import { ListProjects } from './listProjects';
import { Subtitles } from '/src/globalStyles';
import { SectionsStyles, langContext } from '/src/helpers';

export function Projects() {
	const { language } = useContext(langContext);

	const { title } = language.projects;

	return (
		<SectionsStyles name='projects'>
			<Subtitles>{title}</Subtitles>
			<ListProjects />
		</SectionsStyles>
	);
}
