import React, { useContext } from 'react';
import { appContext } from '/src/context';
import { Input } from '/src/helpers';

export const Formulary = () => {
	const { language } = useContext(appContext);
	const { name, surname, email, message, typeYourMessage, formTitle, submit } = language.contact;

	const inputs = [
		{ name },
		{ name: surname },
		{ name: email, type: 'email' },
		{ name: message, placeholder: typeYourMessage },
	];

	return (
		<form className='form'>
			<h3 className='form__title'>{formTitle}</h3>

			{ inputs.map(props => (<Input {...props} key={props.name} />)) }

			<button className='form__submit' type='submit'>
				{submit}
			</button>
		</form>
	);
};
