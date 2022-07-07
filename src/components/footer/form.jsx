import React, { useContext, useRef } from 'react'
import { appContext } from '/src/context'
import { Input } from '/src/helpers'
import { Form, Submit } from './styles'

export function Formulary() {
	const { effects: { setShowModal, setModalText }, language } = useContext(appContext)
	const { name, surname, email, message, typeYourMessage, formTitle, submit } = language.contact
	const { emailOk, emailError, submitOk, submitError } = language.modal

	const formRef = useRef()

	const emailValidation = '^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+.[a-zA-Z]{2,3}$'

	const inputs = [
		{ name },
		{ name: surname },
		{ name: email, type: 'email', pattern: emailValidation },
		{ name: message, placeholder: typeYourMessage },
	]

	async function handlerSubmit(e) {
		e.preventDefault()
		const data = new FormData(e.target)
		try {
			const request = await fetch('https://formspree.io/f/mbjweyop', {
				method: 'POST',
				body: data,
				headers: {
					Accept: 'application/json',
				},
			})

			if(!request.ok) throw new Error()

			setShowModal(emailOk), setModalText(submitOk), formRef.current.reset()
		} catch {
			setShowModal(emailError), setModalText(submitError)
		}
	}

	return (
		<Form onSubmit={handlerSubmit} ref={formRef}>
			<h3>{formTitle}</h3>

			{inputs.map(props => <Input {...props} key={props.name} />)}

			<Submit type='submit'>{submit}</Submit>
		</Form>
	)
}
