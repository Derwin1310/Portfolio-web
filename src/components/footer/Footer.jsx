import React, { useContext } from 'react';
import { Social, Formulary, TextWrapper, Copyright } from './';
import { appContext } from '/src/context';
import { SectionsStyles } from '/src/helpers';
import { Subtitles } from '/src/globalStyles';

export function Footer() {
	const { language } = useContext(appContext);
	const { title, subtitle, contactDesc, design } = language.contact;

	return (
		<footer>
			<SectionsStyles name='footer'>
				<Subtitles variant>{title}</Subtitles>

				<TextWrapper>
					<h3>{subtitle}</h3>
					<p>{contactDesc}</p>
				</TextWrapper>

				<Social />

				<Formulary />

				<Copyright>
					<span>{design}</span>
					<a href='https://padronjose.com' target='_blank'>
						<img
							src='https://raw.githubusercontent.com/Derwin1310/assets-for-portfolio/main/about-imgs/gaiden.webp'
							alt='gaiden'
						/>
					</a>
				</Copyright>
			</SectionsStyles>
		</footer>
	);
}
