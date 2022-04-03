import {SectionIcons} from './SectionIcons';
import {TechIcons} from './TechIcons';
import {langContext} from '../helpers/langContext';
import {useContext} from 'react';
import './style.css';

export function About() {
	const {language} = useContext(langContext);

	const {title, technologies, blueText} = language.about;

	return (
		<div className='background-color about'>
			<div id='about' className='section'>
				<h2 className='subtitle'>{title}</h2>

				<SectionIcons />

				<div className='hexagon-grid responsive-desc '>
					<div className='hexagon'>
						<h4 className='hexagon__name'>Derwin Romero</h4>
						<p className='hexagon__p'>
							{technologies}
							<span className='quote__span'>{blueText}</span>
						</p>
					</div>
				</div>
				<TechIcons />
			</div>
		</div>
	);
}
