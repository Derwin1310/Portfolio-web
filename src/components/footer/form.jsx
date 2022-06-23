import React, { useContext } from 'react';
import { useForm } from '@formspree/react';
import { appContext } from '/src/context';
import { Input } from '/src/helpers';
import { Form, Submit } from './styles';

export function Formulary() {
	const [state, handleSubmit] = useForm("mbjweyop");

  	if (state.succeeded) {
    	alert('Thanks for joining!');
	}

	const { language } = useContext(appContext);
	const { name, surname, email, message, typeYourMessage, formTitle, submit } = language.contact;

	const emailValidation = '^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,3}$'

	const inputs = [
		{ name },
		{ name: surname },
		{ name: email, type: 'email', pattern: emailValidation },
		{ name: message, placeholder: typeYourMessage },
	];

	return (
		<Form onSubmit={handleSubmit}>
			<h3>{formTitle}</h3>

			{ inputs.map(props => (<Input {...props} key={props.name} />)) }
			
			<Submit>{submit}</Submit>
		</Form>
	);
};
