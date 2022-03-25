import React from 'react';

//Componente para recorrer los iconos de las tecnologias que sabemos utilizar por los momentos y agregar mas a futuro sin sobrecargar el componente about.
export function TechIcons () {
	const techIcons = [
		{
			src: 'https://raw.githubusercontent.com/Derwin1310/assets-for-portfolio/main/about-imgs/icon-html.webp',
			alt: 'HTML icon',
		},
		{
			src: 'https://raw.githubusercontent.com/Derwin1310/assets-for-portfolio/main/about-imgs/icon-css.webp',
			alt: 'CSS icon',
		},
		{
			src: 'https://raw.githubusercontent.com/Derwin1310/assets-for-portfolio/main/about-imgs/icon-js.webp',
			alt: 'JS icon',
		},
		{
			src: 'https://raw.githubusercontent.com/Derwin1310/assets-for-portfolio/main/about-imgs/icon-react.webp',
			alt: 'React icon',
		},
		{
			src: 'https://raw.githubusercontent.com/Derwin1310/assets-for-portfolio/main/about-imgs/icon-redux.webp',
			alt: 'Redux icon',
		},
		{
			src: 'https://raw.githubusercontent.com/Derwin1310/assets-for-portfolio/main/about-imgs/icon-github.webp',
			alt: 'Github icon',
		},
	];

	return (
		<div className='grid-container'>
			{
				techIcons.map(({src, alt}) => (
					<img className='grid-icon' key={alt} src={src} alt={alt} />
				))
			}
		</div>
	);
};
