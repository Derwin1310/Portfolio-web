import React, { useContext, useRef } from 'react'
import { appContext } from '/src/context'
import { Input, formSubmit } from '/src/helpers'
import { Form, Submit } from './styles'

export function Formulary() {
	const { effects: { setShowModal }, language } = useContext(appContext)
	const { name, surname, email, message, typeYourMessage, formTitle, submit } = language.contact
	const { emailOk, emailError } = language.modal

	const formRef = useRef()

	const emailValidation = '^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+.[a-zA-Z]{2,3}$'

	const inputs = [
		{ name },
		{ name: surname },
		{ name: email, type: 'email', pattern: emailValidation },
		{ name: message, placeholder: typeYourMessage },
	]

	const handlerSubmit = (e) => (
		formSubmit(e, emailOk, emailError, formRef, setShowModal)
	)

	return (
		<Form onSubmit={handlerSubmit} ref={formRef}>
			<h3>{formTitle}</h3>

			{inputs.map(props => <Input {...props} key={props.name} />)}

			<Submit type='submit'>{submit}</Submit>
		</Form>
	)
}
