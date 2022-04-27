import React, { useContext } from 'react';
import { Icono, langContext } from '/src/helpers';
import { Articles, ArticlesWrapper, ShareIcons } from './styles';
// revisar los estilos de css para ver si no hacen falta
export function ListArticle() {
	const { language } = useContext(langContext);

	const { wrapper } = language.articles;

	const { seeMore } = language;

	return (
		<Articles>
			{wrapper.map(({ src, article, desc, date, articleLink }) => (
				<ArticlesWrapper key={article}>
					<img className='articles__img' src={src} alt='CSS article' />
					<h4 className='articles__title'>{article}</h4>
					<p className='articles__desc'>
						{desc}{' '}
						<a className='articles__link' href={articleLink} target='_blank'>
							{seeMore}
						</a>
					</p>

					<ShareIcons>
						<Icono name='share' small />
						<Icono name='like' small />
						<time>{date}</time>
					</ShareIcons>
				</ArticlesWrapper>
			))}
		</Articles>
	);
}
