import { useContext } from 'react';
import { langContext } from '/src/helpers';
import { Button, Div, Header, HomePage, Logo, Name, Slogan } from './styles';

export function Home() {
	const { language } = useContext(langContext);

	const { title, resume, resumePhone } = language.home;

	const responsiveText = window.innerWidth >= 769 ? resume : resumePhone;

	return (
		<HomePage id='home'>
			<Header>
				<Div>
					<Logo
						src='https://raw.githubusercontent.com/Derwin1310/assets-for-portfolio/main/about-imgs/logo.webp'
						alt='niceLogo'
					/>
					<Name>Derwin Romero</Name>
				</Div>
				<Slogan>{title}</Slogan>
			</Header>

			<Button href='https://github.com/Derwin1310/assets-for-portfolio/raw/main/about-imgs/CV%20Derwin%20Romero.pdf'>
				{responsiveText}
			</Button>
		</HomePage>
	);
}
