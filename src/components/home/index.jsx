import React, { useContext } from 'react';
import { appContext } from '/src/context'
import { Button, NameWrapper, Header, HomePage, Logo, Name, Slogan } from './styles';

export function Home() {
	const { language } = useContext(appContext);
	const { title, resume, resumePhone } = language.home;

	const responsiveText = window.innerWidth >= 769 ? resume : resumePhone;

	return (
		<HomePage id='home'>
			<Header>
				<NameWrapper>
					<Logo
						src='https://raw.githubusercontent.com/Derwin1310/assets-for-portfolio/main/about-imgs/logo.webp'
						alt='niceLogo'
					/>
					<Name>Derwin Romero</Name>
				</NameWrapper>
				<Slogan>{title}</Slogan>
			</Header>

			<Button href='https://github.com/Derwin1310/assets-for-portfolio/raw/main/about-imgs/CV%20Derwin%20Romero.pdf'>
				{responsiveText}
			</Button>
		</HomePage>
	);
}
