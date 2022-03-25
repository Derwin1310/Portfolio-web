import {SectionIcons} from '../about/SectionIcons';
import {TechIcons} from '../about/TechIcons';
import './styles/about-responsive.css';

export function AboutResponsive () {
	return (
		<div className='background-color'>
			<div className='section about-resp'>
				<h2 className='subtitle'>About</h2>

				<div className='about-wrapper'>
					<SectionIcons />

                    <div className='responsive-desc'>
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
