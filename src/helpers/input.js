import React from 'react';

export function Input({ name = '', type = 'text', placeholder }) {
	return (
		<label className='form__label'>
			{name}
			{
				placeholder 
				? <textarea className='input' placeholder={placeholder} />
				: <input
					autoComplete='off'
					className='input'
					placeholder={name}
					type={type}
					id={name}
				/>
			}
		</label>
	);
}
