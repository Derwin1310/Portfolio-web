import React, { useContext } from 'react';
import { ListArticle } from './listArticle';
import { SectionsStyles } from '/src/helpers';
import { appContext } from '/src/context'
import { Subtitles } from '/src/globalStyles';

export function Article() {
	const { language } = useContext(appContext);

	const { title } = language.articles;

	return (
		<SectionsStyles name='article'>
			<Subtitles>{title}</Subtitles>
			<ListArticle />
		</SectionsStyles>
	);
}
