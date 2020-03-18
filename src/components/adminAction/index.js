import React from 'react'
import './adminAction.scss'
import { connect } from 'react-redux'

const AdminAction = ({ news }) => {
  console.log(news)

  const onClickApprove = e => {
    e.preventDefault()
  }

  return (
    <div className="admin-action">
      <button className="admin-action__btn-approve" onClick={onClickApprove}>
        Одобрить
      </button>
      <button className="admin-action__btn-delete">Удалить</button>
    </div>
  )
}

const mapStateToProts = state => ({ news: state })
export default connect(mapStateToProts)(AdminAction)
