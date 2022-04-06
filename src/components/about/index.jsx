import {SectionIcons} from './SectionIcons';
import {TechIcons} from './TechIcons';
import {langContext} from '../helpers/langContext';
import {useContext} from 'react';
import './style.css';

export function About() {
	const {language} = useContext(langContext);

	const {title, technologies, blueText} = language.about;

	return (
		<div id='about' className='section'>
			<h2 className='subtitle'>{title}</h2>

			<SectionIcons />

				<div className='desc'>
					<h4 className='desc__name'>Derwin Romero</h4>
					<p className='desc__p'>
						{technologies}
						<span className='desc__span'>{blueText}</span>
					</p>
				</div>
			
			<TechIcons />

		</div>
	);
}
