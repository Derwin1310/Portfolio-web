import {SectionIcons} from './SectionIcons';
import {TechIcons} from './TechIcons';
import {langContext} from '../helpers';
import {useContext} from 'react';
import { Subtitles } from '../../globalStyles';
import { Desc, DescName, DescSpan } from './styles';
import { Section } from '../helpers/Section';


export function About() {
	const {language} = useContext(langContext);

	const {title, technologies, blueText} = language.about;

	return (
		<Section name='about'>
			<Subtitles>{title}</Subtitles>
			
			<SectionIcons />

			<Desc>
				<DescName>Derwin Romero</DescName>
					{technologies}
					<DescSpan>{blueText}</DescSpan>
			</Desc>
			
			<TechIcons />
		</Section>
	);
}
