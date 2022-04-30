import React, { useContext } from 'react';
import { Icono, langContext } from '/src/helpers';
import { Articles, ArticlesWrapper, ShareIcons } from './styles';

export function ListArticle() {
	const { language } = useContext(langContext);

	const { wrapper } = language.articles;

	const { seeMore } = language;

	return (
		<Articles>
			{wrapper.map(({ src, article, desc, date, articleLink }) => (
				<ArticlesWrapper key={article}>
					<img src={src} alt='CSS article' />
					<h4>{article}</h4>
					<p>
						{desc}
						<a href={articleLink} target='_blank'>
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
