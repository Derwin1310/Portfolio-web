import React from 'react';
import { Sections } from '../../globalStyles';
import '../../styles.css'

export function Section({children, name}) {
	return (
		<Sections id={name}>
			<div>
				{children}
			</div>
		</Sections>
	);  
}