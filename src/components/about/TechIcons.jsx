import { Icono } from '../helpers';
import { GridTechs } from './styles';

//Componente para recorrer los iconos de las tecnologias que sabemos utilizar por los momentos y agregar mas a futuro sin sobrecargar el componente about.
export function TechIcons() {
	const techIcons = ['js', 'html', 'css', 'react', 'redux', 'git'];

	return (
		<GridTechs>
			{
				techIcons.map(item => (
					<Icono key={item} name={item} width='100' height='100' />
				))
			}
		</GridTechs>
	);
}
