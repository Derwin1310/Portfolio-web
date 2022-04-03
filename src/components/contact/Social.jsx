import {Icono} from '../helpers/Icono';

//Componente para recorrer las redes sociales de el componente contacto junto con los iconos importados del helper
export const Social = () => {
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
		<div className='social'>
			{
				socialMedias.map(({icon, href, social}) => (
					<section className='social__medias' key={social}>
						<Icono name={icon} />
						<a className='link' target='_blank' href={href}>
							{social}
						</a>
					</section>
				))
			}
		</div>
	);
};
