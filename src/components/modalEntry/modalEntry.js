import React from 'react'
import Modal from '../Modal'
import './modalEntry.scss'

import { connect } from 'react-redux'
import { authLogin } from './../../actions/action'

class ModalEntry extends React.Component {
  state = {
    error: false,
    login: '',
    password: ''
  }

  onLogin = () => {
    const { login, password } = this.state
    this.props.authLogin(login, password)
    this.onCloseModal()
  }

  onCloseModal = () => {
    const { login, password } = this.state
    if (
      (login === 'admin' && password === 'admin') ||
      (login === 'user' && password === 'user')
    ) {
      this.setState({ login: '', password: '' })
      this.props.closeModal()
    }
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
    const { isOpen, closeModal, authError } = this.props
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

          {authError && <p>Данные введены неверно</p>}
        </div>
      </Modal>
    )
  }
}

const mapStateToProps = state => {
  return {
    authError: state.authError,
    user: state.user
  }
}

const mapDispatchToProps = dispatch => ({
  authLogin: (login, password) => dispatch(authLogin(login, password))
})

export default connect(mapStateToProps, mapDispatchToProps)(ModalEntry)
