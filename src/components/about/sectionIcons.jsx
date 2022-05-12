import React, { useContext } from 'react';
import { appContext } from '/src/context'
import { IconsSection, IconWrapper } from './styles';

//Componente para recorrer las imagenes de fast, usable, clean and dynamic de nuestro componente about.
export function SectionIcons () {
	const {language} = useContext(appContext);
	
	const {icons} = language.about;

	return (
		<IconsSection>
			{
				icons.map(({name, desc, src}) => (
					<IconWrapper key={name}>
						<img src={src} alt={name} />
						<h3>{name}</h3>
						<p>{desc}</p>
					</IconWrapper>
				))
			}	
		</IconsSection>
	);
};
