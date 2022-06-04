import React, { useContext } from 'react';
import { appContext } from '/src/context';
import { Input } from '/src/helpers';
import { Form, Submit } from './styles';

export function Formulary() {
	const { language } = useContext(appContext);
	const { name, surname, email, message, typeYourMessage, formTitle, submit } = language.contact;

	const inputs = [
		{ name },
		{ name: surname },
		{ name: email, type: 'email' },
		{ name: message, placeholder: typeYourMessage },
	];

	return (
		<Form>
			<h3>{formTitle}</h3>

			{ inputs.map(props => (<Input {...props} key={props.name} />)) }

			<Submit type='submit'>{submit}</Submit>
		</Form>
	);
};
