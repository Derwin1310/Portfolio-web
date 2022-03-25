import {SectionIcons} from './SectionIcons';
import {TechIcons} from './TechIcons';
import './styles/About.css';

export function About () {
	return (
		<div className='background-color about'>
			<div id='about' className='section'>
				<h2 className='subtitle'>About</h2>

				<SectionIcons />

				<div className='hexagon-grid'>
					<div className='hexagon'>
						<h4 className='hexagon__name'>Derwin Romero</h4>
						<p className='hexagon__ p'>
							This are all the technologys that i use to make everything looks
							like magic in the internet,{' '}
							<span className='quote__span'>
								always looking for more to make big things with then.
							</span>
						</p>
					</div>

					<TechIcons />
				</div>
			</div>
		</div>
	);
}
