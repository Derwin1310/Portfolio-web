import React, { useContext } from 'react';
import { appContext } from '/src/context'
import { ProjectsWrapper, Projects, ProjectsDesc, ViewSite } from './styles';

export function ListProjects() {
	const { language } = useContext(appContext);

	const { wrapper } = language.projects;

	const { seeMore } = language;

	return (
		<ProjectsWrapper>
			{wrapper.map(({ name, src, about, techs, view }) => (
				<Projects key={name}>
					<img src={src} alt={name} />
					<ProjectsDesc>
						<h4>{name}</h4>
						<span>{techs.map(item => item).join(', ')}.</span>
						<p>
							{about}
							<a href='#' target='_blank'>{seeMore}</a>
						</p>
						<ViewSite href='#'>{view}</ViewSite>
					</ProjectsDesc>
				</Projects>
			))}
		</ProjectsWrapper>
	);
}
