import React from 'react';

export const ListProjects = () => {
	const projectList = [
		{
			name: 'Portfolio',
			src: 'https://raw.githubusercontent.com/Derwin1310/assets-for-portfolio/main/about-imgs/portfolio-image-ligero.webp',
			techs: ['React js', 'Css', 'Git'],
			about: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. lorem lorem lorem',
		},
	];

	return (
		<section className='projects-wrapper'>
			{
				projectList.map(({name, src, about, techs}) => (
					<article key={name} className='project'>
						<img className='project__img' src={src} alt={name} />
						<div className='project__desc'>
							<h4 className='project__title'>{name}</h4>
							<p className='project__techs'>
								{techs.map(item => item).join(', ')}.
							</p>
							<p className='project__about'>
								{about}{' '}
								<a className='articles__link' href='#' target='_blank'>
									...See more
								</a>
							</p>
							<a className='project__link' href='#'>
								View site
							</a>
						</div>
					</article>
				))
			}
		</section>
	);
};
