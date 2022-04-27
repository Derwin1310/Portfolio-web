import React, { useContext } from 'react';
import { ListArticle } from './listArticle';
import { langContext, SectionsStyles } from '/src/helpers';
import { Subtitles } from '/src/globalStyles';
import './style.css';

export function Article() {
	const { language } = useContext(langContext);

	const { title } = language.articles;

	return (
		<SectionsStyles name='article'>
			<Subtitles>{title}</Subtitles>
			<ListArticle />
		</SectionsStyles>
	);
}
