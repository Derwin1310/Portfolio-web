import React from 'react';
import {Icono} from '../helpers/Icono';
import {langContext} from '../helpers/langContext';
import {useContext} from 'react';

export function ListArticle() {
	const {language} = useContext(langContext);

	const {wrapper} = language.articles;

	const {seeMore} = language;

	return (
		<article className='grid-article'>
			{
				wrapper.map(({src, article, desc, date, articleLink}) => (
					<div key={article} className='articles'>
						<img className='articles__img' src={src} alt='CSS article' />
						<h4 className='articles__title'>{article}</h4>
						<p className='articles__desc'>
							{desc}{' '}
							<a className='articles__link' href={articleLink} target='_blank'>
								{seeMore}
							</a>
						</p>

						<div className='articles__icons'>
							<Icono name='share' small />
							<Icono name='like' small />
							<time>{date}</time>
						</div>
					</div>
				))
			}
		</article>
	);
}
