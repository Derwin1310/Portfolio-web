import React, { Fragment, useContext } from 'react'
import { CoffeMachine, ModalInner, ModalWrapper } from './'
import { appContext } from '/src/context'
import { Submit } from '/src/components/footer'

export function ModalView() {
	const { modalText, showModal, language, effects: { setShowModal } } = useContext(appContext)
	const { textBtn } = language.modal

	const closeModal = () => setShowModal(false)

	return (
		showModal && (
			<Fragment>
				<ModalWrapper onClick={closeModal} />
				<ModalInner>
					<h3>{showModal}</h3>
					<p>{modalText}</p>
					<CoffeMachine />
					<Submit onClick={closeModal}>{textBtn}</Submit>
				</ModalInner>
			</Fragment>
		)
	)
}
