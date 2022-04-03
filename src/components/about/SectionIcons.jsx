import React from 'react';
import { langContext } from '../helpers/langContext';
import { useContext } from 'react';


//Componente para recorrer las imagenes de fast, usable, clean and dynamic de nuestro componente about.
export function SectionIcons () {
	const {language} = useContext(langContext);
	
	const {icons} = language.about;

	return (
		<section className='icons-map'>
			{
				icons.map(({name, desc, src}) => (
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
