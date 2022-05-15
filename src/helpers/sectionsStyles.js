import React from 'react';
import { Sections } from '/src/globalStyles';
import '/src/styles.css';

export function SectionsStyles({ children, name, variant }) {

	return (
		<Sections variant={variant} id={name}>
			<div>{children}</div>
		</Sections>
	);
}
