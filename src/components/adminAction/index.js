import React from 'react'
import './adminAction.scss'
import { connect } from 'react-redux'
import { approveNews } from './../../actions/action'

const AdminAction = ({ newsId, approveNews }) => {
  console.log('AdminAction newsId', newsId)

  return (
    <div className="admin-action">
      <button
        className="admin-action__btn-approve"
        onClick={() => approveNews(newsId)}
      >
        Одобрить
      </button>
      <button className="admin-action__btn-delete">Удалить</button>
    </div>
  )
}

const mapDispatchToProps = dispatch => ({
  approveNews: id => {
    return dispatch(approveNews(id))
  }
})

export default connect(null, mapDispatchToProps)(AdminAction)
