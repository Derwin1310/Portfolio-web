import React, { useContext, useRef } from 'react'
import { appContext } from '/src/context'
import { Input } from '/src/helpers'
import { Form, Submit } from './styles'

export function Formulary() {
	const { language, setShowModal } = useContext(appContext)
	const { name, surname, email, message, typeYourMessage, formTitle, submit } = language.contact
	const { emailOk, emailError } = language.modal

	const formReset = useRef()

	const emailValidation = '^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+.[a-zA-Z]{2,3}$'

	const inputs = [
		{ name },
		{ name: surname },
		{ name: email, type: 'email', pattern: emailValidation },
		{ name: message, placeholder: typeYourMessage },
	]

	async function handleSubmit(event) {
		event.preventDefault()
		const data = new FormData(event.target)
		fetch('https://formspree.io/f/mbjweyop', {
			method: 'POST',
			body: data,
			headers: {
				Accept: 'application/json',
			},
		})
		.then(response => {
			response.ok
				? (setShowModal(emailOk), formReset.current.reset())
				: setShowModal(emailError)
		})
		.catch(error =>
			setShowModal(emailError),
		)
	}

	return (
		<Form onSubmit={handleSubmit} ref={formReset}>
			<h3>{formTitle}</h3>

			{inputs.map(props => (
				<Input {...props} key={props.name} />
			))}

			<Submit>{submit}</Submit>
		</Form>
	)
}
