import React from 'react'
import Modal from '../Modal'
import './modalEntry.scss'

const ModalEntry = ({ isOpen, closeModal }) => (
  <Modal isOpen={isOpen} closeModal={closeModal} title="Вход">
    <div className="ModalEntry">Вход/Выход</div>
  </Modal>
)

export default ModalEntry
