import React, { useState } from 'react'
import './header.scss'

import { Link } from 'react-router-dom'
import ModalEntry from '../modalEntry/modalEntry'

const Header = () => {
  const [isModalEntryOpen, showModal] = useState(false)

  const openEntryModal = e => {
    e.preventDefault()
    showModal(true)
  }

  const closeEntryModal = e => {
    e.preventDefault()
    showModal(false)
  }

  return (
    <div className="header">
      <ul className="header__menu">
        <li>
          <Link to="/" className="header__link">
            Главная
          </Link>
        </li>
        <li>
          <Link to="/news" className="header__link">
            Новости
          </Link>
        </li>
        <li>
          <a href="0#" className="header__link" onClick={openEntryModal}>
            Вход/Выход
          </a>
        </li>
      </ul>
      <ModalEntry isOpen={isModalEntryOpen} closeModal={closeEntryModal} />
    </div>
  )
}

export default Header
