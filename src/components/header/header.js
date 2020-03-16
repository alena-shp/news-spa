import React from 'react'
import './header.scss'

import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <div className="header">
      <ul className="header__menu">
        <li>
          <Link to="/" className="header__link">Главная</Link>
        </li>
        <li>
          <Link to="/news" className="header__link">Новости</Link>
        </li>
        <li>
          <a href="0#" className="header__link">Вход/Выход</a>
        </li>
      </ul>
    </div>
  )
}

export default Header
