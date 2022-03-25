import {Icon} from '@iconify/react';
import React from 'react';

//Este Helper nos ayuda a sacar los iconos del iconify y destructurando sus propiedades una por una y poderlo usar por medio del dictionary que creamos y tener mas facilidad a la hora de buscar los iconos de nuestra web.
export function Icono({
	name = 'notFound',
	color = '#009ada',
	width = '28',
	height = '28',
	small = false,
}) {
	const iconDictionary = {
        notFound: 'tabler:error-404',
		facebook: 'ant-design:facebook-filled',
        github: 'fa-brands:github-square',
        linkedin: 'akar-icons:linkedin-box-fill',
		like: 'akar-icons:heart',
		share: 'bi:share-fill',
	};

	return (
		<Icon
			icon={iconDictionary[name]}
			color={color}
			width={small ? 20 : width}
			height={small ? 20 : height}
		/>
	);
}
