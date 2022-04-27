import React from 'react';
import { Sections } from '/src/globalStyles';
import '/src/styles.css';

export function SectionsStyles({ children, name }) {
	return (
		<Sections id={name}>
			<div>{children}</div>
		</Sections>
	);
}
