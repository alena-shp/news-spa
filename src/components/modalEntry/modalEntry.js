import React from 'react'
import Modal from '../Modal'
import './modalEntry.scss'

import { connect } from 'react-redux'
import { authLogin } from './../../actions/action'

class ModalEntry extends React.Component {
  state = {
    login: '',
    password: ''
  }

  onLogin = e => {
    const { login, password } = this.state
    this.props.authLogin(login, password)
    this.setState({ login: '', password: '' })
    this.props.closeModal()
  }

  onChangeLogin = e => {
    const login = e.target.value
    this.setState({ login })
  }

  onChangePassword = e => {
    const password = e.target.value
    this.setState({ password })
  }

  render() {
    const { isOpen, closeModal } = this.props
    const { login, password } = this.state

    return (
      <Modal isOpen={isOpen} closeModal={closeModal} title="Вход">
        <div className="ModalEntry">
          <input
            type="text"
            value={login}
            onChange={this.onChangeLogin}
            className="ModalEntry__login"
            placeholder="введите логин"
          />
          <input
            type="password"
            value={password}
            onChange={this.onChangePassword}
            className="ModalEntry__password"
            placeholder="введите пароль"
          />
          <button className="ModalEntry__btn" onClick={this.onLogin}>
            Войти
          </button>
        </div>
      </Modal>
    )
  }
}

const mapDispatchToProps = dispatch => ({
  authLogin: (login, password) => dispatch(authLogin(login, password))
})

export default connect(null, mapDispatchToProps)(ModalEntry)
