import React from 'react';
import { Icono } from '/src/helpers';
import { SocialProfiles } from './styles';

export function Social() {
	const socialMedias = [
		{
			icon: 'facebook',
			href: 'https://www.facebook.com/derwin.romero1310',
			social: 'Facebook',
		},
		{
			icon: 'github',
			href: 'https://github.com/Derwin1310',
			social: 'Github',
		},
		{
			icon: 'linkedin',
			href: 'https://www.linkedin.com/in/derwinerr/',
			social: 'LinkedIn',
		},
	];

	return (
		<SocialProfiles>
			{socialMedias.map(({ icon, href, social }) => (
				<section key={social}>
					<Icono name={icon} />
					<a target='_blank' href={href}>
						{social}
					</a>
				</section>
			))}
		</SocialProfiles>
	);
}
