import React from 'react';
import { ListArticle } from './ListArticle';
import './styles.css/article.css';

export function Article() {
	return (
		<div className='background-color'>
			<div id='article' className='section'>
				<h2 className='subtitle'>Articles</h2>
				<article className='grid-article'>
					<ListArticle />
				</article>
			</div>
		</div>
	);
}
