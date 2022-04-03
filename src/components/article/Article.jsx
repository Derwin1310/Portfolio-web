import React from 'react';
import { ListArticle } from './ListArticle';
import { langContext } from '../helpers/langContext';
import { useContext } from 'react';
import './style.css';

export function Article() {
	const {language} = useContext(langContext);

	const {title} = language.articles;

	return (
		<div className='background-color'>
			<div id='article' className='section'>
				<h2 className='subtitle'>{title}</h2>
				<article className='grid-article'>
					<ListArticle />
				</article>
			</div>
		</div>
	);
}
