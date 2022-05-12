import React, { useContext } from 'react';
import { appContext } from '/src/context'
import { Link } from './styles';

export function NavLinks() {
	const { language } = useContext(appContext);

	const links = language.navbar;

	return links.map(({ href, name }) => (
		<li key={name}>
			<Link href={href}>{name}</Link>
		</li>
	));
};
