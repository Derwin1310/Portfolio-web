import React, { useContext } from 'react';
import { Social } from './social';
import { SectionsStyles } from '/src/helpers';
import { appContext } from '/src/context';
import { Formulary } from './form';
import { Subtitles } from '/src/globalStyles';
import { TextWrapper, Copyright } from './styles';

export function Footer() {
	const { language } = useContext(appContext);

	const { title, subtitle, contactDesc } = language.contact;

	return (
		<footer>
			<SectionsStyles variant name='footer'>
				<Subtitles variant>{title}</Subtitles>

				<TextWrapper>
					<h3>{subtitle}</h3>
					<p>{contactDesc}</p>
				</TextWrapper>

				<Social />

				<Formulary />

				<Copyright>
					<img
						src='https://raw.githubusercontent.com/Derwin1310/assets-for-portfolio/main/about-imgs/gaiden.webp'
						alt='gaiden'
					/>
				</Copyright>
			</SectionsStyles>
		</footer>
	);
}
