import React from 'react';
import { InputWrapper } from '/src/globalStyles';

export function Input({ name = '', type = 'text', placeholder }) {
	return (
		<InputWrapper>
			{name}
			{placeholder ? (
				<textarea placeholder={placeholder} />
			) : (
				<input
					autoComplete='off'
					placeholder={name}
					type={type}
					id={name}
				/>
			)}
		</InputWrapper>
	);
}
