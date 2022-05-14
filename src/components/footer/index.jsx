import React, { useContext } from 'react';
import { Social } from './social';
import { SectionsStyles } from '/src/helpers';
import { appContext } from '/src/context';
import { Subtitles } from '/src/globalStyles';
import { Formulary } from './form';
import './style.css';

export function Footer() {
	const { language } = useContext(appContext);

	const { title, subtitle, contactDesc } = language.contact;

	return (
		<footer id='footer' className='footer-wrapper'>
			<SectionsStyles>
				<Subtitles className='footer'>{title}</Subtitles>

				<div className='subtitle'>
					<h3 className='subtitle__h3'>{subtitle}</h3>

					<p className='subtitle__p'>{contactDesc}</p>
				</div>

				<Social />

				<Formulary />

				<div className='copyright'>
					<img
						src='https://raw.githubusercontent.com/Derwin1310/assets-for-portfolio/main/about-imgs/gaiden.webp'
						alt='gaiden'
					/>
				</div>
			</SectionsStyles>
		</footer>
	);
}
