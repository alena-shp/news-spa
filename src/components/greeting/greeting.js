import React from 'react'
import './greeting.scss'

import { connect } from 'react-redux'

const Greeting = ({ user }) => {
  const name = user ? user.login : 'Гость'

  return (
    <div className="greeting">
      <p>Привет, {name}!</p>
    </div>
  )
}
const mapStateToProps = state => ({ user: state.user })

export default connect(mapStateToProps)(Greeting)
