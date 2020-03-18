import React from 'react'
import './adminAction.scss'
import { connect } from 'react-redux'
import { approveNews, deleteNews } from './../../actions/action'

const AdminAction = ({ newsId, approveNews, deleteNews }) => {
  return (
    <div className="admin-action">
      <button
        className="admin-action__btn-approve"
        onClick={() => approveNews(newsId)}
      >
        Одобрить
      </button>
      <button
        className="admin-action__btn-delete"
        onClick={() => deleteNews(newsId)}
      >
        Удалить
      </button>
    </div>
  )
}

const mapDispatchToProps = dispatch => ({
  approveNews: id => dispatch(approveNews(id)),
  deleteNews: id => dispatch(deleteNews(id))
})

export default connect(null, mapDispatchToProps)(AdminAction)
