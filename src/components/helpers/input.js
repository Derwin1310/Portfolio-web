import {Icon} from '@iconify/react';
import React from 'react';
import {Fragment} from 'react/cjs/react.production.min';

export function Input({
	name = 'notFound',
	color = '#009ada',
	width = '28',
	height = '28',
}) {
	return (
		<Fragment>
			<label htmlFor='first name' className='form__label'>
				First Name
			</label>
			<input
				className='form__name input'
				placeholder='First Name'
				type='text'
				id='first name'
			/>
		</Fragment>
	);
}
