import React from 'react';
import { ListArticle } from './ListArticle';
import { langContext } from '../helpers/langContext';
import { useContext } from 'react';
import './style.css';

export function Article() {
	const {language} = useContext(langContext);

	const {title} = language.articles;

	return (
		<div className='bg-color2'>
			<div id='article' className='section'>
				<h2 className='subtitle'>{title}</h2>
				
				<ListArticle />

			</div>
		</div>
	);
}
