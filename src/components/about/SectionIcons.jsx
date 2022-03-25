import React from 'react';

//Componente para recorrer las imagenes de fast, usable, clean and dynamic de nuestro componente about.
export function SectionIcons () {
	const iconSection = [
		{
			src: 'https://raw.githubusercontent.com/Derwin1310/assets-for-portfolio/main/about-imgs/fast-icon.webp',
			name: 'Fast',
			desc: 'Fast load times and free interactions for better user experience.',
		},
		{
			src: 'https://raw.githubusercontent.com/Derwin1310/assets-for-portfolio/main/about-imgs/usable-icon.webp',
			name: 'Usable',
			desc: "My layouts will always work on any device, doesn't matter the size.",
		},
		{
			src: 'https://raw.githubusercontent.com/Derwin1310/assets-for-portfolio/main/about-imgs/clean-icon.webp',
			name: 'Clean',
			desc: 'I always try to do the cleanest code for readability, my highest priorty.',
		},
		{
			src: 'https://raw.githubusercontent.com/Derwin1310/assets-for-portfolio/main/about-imgs/dynamic-icon.webp',
			name: 'Dynamic',
			desc: "Websites don't have to be static, I love making pages come to life.",
		},
	];

	return (
		<section className='icons-map'>
			{
				iconSection.map(({name, desc, src}) => (
					<div className='icons-map__wrapper' key={name}>
						<img className='icon' src={src} alt={name} />
						<h3 className='name'>{name}</h3>
						<p>{desc}</p>
					</div>
				))
			}	
		</section>	
	);
};
