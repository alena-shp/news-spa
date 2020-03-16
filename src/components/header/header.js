import React from 'react'

const Header = () => {
  return (
    <div className="header">
      <ul className="header__menu">
        <li>
          <a to="/">Главная</a>
        </li>
        <li>
          <a to="/news/">Новости</a>
        </li>
        <li>
          <a to="/enter/">Вход/Выход</a>
        </li>
      </ul>
    </div>
  )
}

export default Header
