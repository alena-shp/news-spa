import React from 'react'
import Modal from '../Modal'
import './modalEntry.scss'

const ModalEntry = ({ isOpen, closeModal }) => (
  <Modal isOpen={isOpen} closeModal={closeModal} title="Вход">
    <div className="ModalEntry">
      <input
        type="text"
        className="ModalEntry__login"
        placeholder="введите логин"
      />
      <input
        type="text"
        className="ModalEntry__password"
        placeholder="введите пароль"
      />
    </div>
  </Modal>
)

export default ModalEntry
