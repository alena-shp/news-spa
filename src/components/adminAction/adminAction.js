import React from 'react'
import './adminAction.scss'

const AdminAction = () => {
 const onClickApprove = () => {

 }
    return (
      <div className="admin-action">
        <button className="admin-action__btn-approve" onClick={onClickApprove}>Одобрить</button>
        <button className="admin-action__btn-delete">Удалить</button>
      </div>
    )
  }


export default AdminAction
