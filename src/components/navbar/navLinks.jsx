import React, { useContext } from 'react';
import { langContext } from '/src/helpers';
import { Link } from './styles';

export function NavLinks() {
	const { language } = useContext(langContext);

	const links = language.navbar;

	return links.map(({ href, name }) => (
		<li key={name}>
			<Link href={href}>{name}</Link>
		</li>
	));
};
