import React, { useContext } from 'react';
import { ProjectsList } from './';
import { Subtitles } from '/src/globalStyles';
import { SectionsStyles } from '/src/helpers';
import { appContext } from '/src/context'

export function ProjectsView() {
	const { language } = useContext(appContext);
	const { title } = language.projects;

	return (
		<SectionsStyles name='projects'>
			<Subtitles>{title}</Subtitles>
			<ProjectsList />
		</SectionsStyles>
	);
}
