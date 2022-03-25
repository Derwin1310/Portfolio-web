import React from 'react';
import {Icono} from '../helpers/Icono';

export function ListArticle() {
	const articles = [
		{
			src: 'https://raw.githubusercontent.com/Derwin1310/assets-for-portfolio/main/about-imgs/css-wallpaper.webp',
			title: 'Good Practices with CSS',
			desc: "The first article that i made, and it's about the good practices on CSS3",
			date: 'March 2022',
		},
	];

	return articles.map(({src, title, desc, date}) => (
        <div key={title} className='articles'>
            <img className='articles__img' src={src} alt='CSS article' />
            <h4 className='articles__title'>{title}</h4>
            <p className='articles__desc'>{desc}</p>
            <div className='articles__icons'>
                <Icono name='share' className='icons-article' small />
                <Icono name='like' className='icons-article' small />
                <time className='icon-art'>{date}</time>
            </div>
        </div>
	));
}
