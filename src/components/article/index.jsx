import React from 'react';
import { ListArticle } from './ListArticle';
import { langContext } from '../helpers';
import { useContext } from 'react';
import { Sections, Subtitles } from '../../globalStyles';
import './style.css';

export function Article() {
	const {language} = useContext(langContext);

	const {title} = language.articles;

	return (
		<div className='bg-color2'>
			<Sections id='article'>
				<Subtitles>{title}</Subtitles>
				
				<ListArticle />
			</Sections>
		</div>
	);
}
