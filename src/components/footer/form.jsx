import React from 'react';

export function Input({ name, type = 'input', placeholder }) {
	return (
		<div className={type === 'input' ? 'form__input' : 'form__textarea'}>
			<label htmlFor={name}>{name}</label>
			<input placeholder={placeholder || name} type={type} id={name} />
		</div>
	);
}
