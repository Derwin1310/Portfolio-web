import React from 'react';
import { InputWrapper } from '/src/globalStyles';

export function Input({ name = '', type = 'text', placeholder, pattern =  "^[a-zA-Z_'-]{2,12}"}) {
	return (
		<InputWrapper>
			{name}
			{placeholder ? (
				<textarea name={name} placeholder={placeholder} />
			) : (
				<input
					name={name}
					autoComplete='off'
					placeholder={name}
					type={type}
					id={name}
					pattern={pattern}
					required
				/>
			)}
		</InputWrapper>
	);
}
