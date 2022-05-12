import React, { useContext } from 'react';
import { ListProjects } from './listProjects';
import { Subtitles } from '/src/globalStyles';
import { SectionsStyles } from '/src/helpers';
import { appContext } from '/src/context'

export function Projects() {
	const { language } = useContext(appContext);

	const { title } = language.projects;

	return (
		<SectionsStyles name='projects'>
			<Subtitles>{title}</Subtitles>
			<ListProjects />
		</SectionsStyles>
	);
}
