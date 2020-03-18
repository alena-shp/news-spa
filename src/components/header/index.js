import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'

import './header.scss'
import ModalEntry from '../modalEntry/modalEntry'
import { authLogout } from './../../actions/action'

const Header = ({ user, authLogout }) => {
  const [isModalEntryOpen, showModal] = useState(false)

  const openEntryModal = e => {
    e.preventDefault()
    showModal(true)
  }

  const closeEntryModal = () => {
    showModal(false)
  }

  const onLogout = e => {
    e.preventDefault()
    authLogout()
  }

  const labelBnt = !user ? 'Вход' : 'Выход'

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
        <li onClick={openEntryModal}>
          <a href="0#" className="header__link" onClick={onLogout}>
            {labelBnt}
          </a>
        </li>
      </ul>
      <ModalEntry isOpen={isModalEntryOpen} closeModal={closeEntryModal} />
    </div>
  )
}

const mapStateToProps = state => ({ user: state.user })

export default connect(mapStateToProps, { authLogout })(Header)
