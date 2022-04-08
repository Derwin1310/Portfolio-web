import React from 'react';
import { langContext } from '../helpers/langContext';
import { useContext } from 'react';
import { IconsSection, IconWrapper } from './styles';

//Componente para recorrer las imagenes de fast, usable, clean and dynamic de nuestro componente about.
export function SectionIcons () {
	const {language} = useContext(langContext);
	
	const {icons} = language.about;

	return (
		<IconsSection>
			{
				icons.map(({name, desc, src}) => (
					<IconWrapper key={name}>
						<img src={src} alt={name} />
						<h3 style={{fontWeight: 600}}>{name}</h3>
						<p>{desc}</p>
					</IconWrapper>
				))
			}	
		</IconsSection>
	);
};
