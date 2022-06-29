import React, { Fragment, useContext } from 'react'
import { CoffeMachine } from './coffeeAnimation'
import { appContext } from '/src/context'
import { Submit } from '/src/components/footer/styles'
import { ModalInner, ModalWrapper } from './styles'

export function Modal() {
	const { effects: { setShowModal }, showModal, language } = useContext(appContext)
	const { text, textBtn } = language.modal

	const closeModal = () => setShowModal(false)

	return (
		showModal && (
			<Fragment>
				<ModalWrapper onClick={closeModal} />
				<ModalInner>
					<h3>{showModal}</h3>
					<p>{text}</p>
					<CoffeMachine />
					<Submit onClick={closeModal}>{textBtn}</Submit>
				</ModalInner>
			</Fragment>
		)
	)
}
