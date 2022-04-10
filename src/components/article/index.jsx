import React from 'react';
import { ListArticle } from './ListArticle';
import { langContext } from '../helpers';
import { useContext } from 'react';
import { Subtitles } from '../../globalStyles';
import './style.css';
import { Section } from '../helpers/Section';


export function Article() {
	const {language} = useContext(langContext);

	const {title} = language.articles;

	return (
		<Section name='article'>
			<Subtitles>{title}</Subtitles>
			<ListArticle />
		</Section>
	);
}
