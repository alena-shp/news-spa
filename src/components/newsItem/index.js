import React from 'react'
import { connect } from 'react-redux'

import { getFilteredNew } from '../../selectors'
import AdminAction from '../adminAction'
import './newsItem.scss'

const NewsItem = ({ filteredNews, unapprovedNews }) => {
  return (
    <>
      <div className="news-items news-items--unapproved">
        {Object.keys(unapprovedNews).map(newsId => {
          const { title, text, date } = unapprovedNews[newsId]
          return (
            <div className="news-item" key={newsId}>
              <h3 className="news-item__title">{title}</h3>
              <p className="news-item__text">{date}</p>
              <span className="news-item__num">{text}</span>
              <AdminAction newsId={newsId} />
            </div>
          )
        })}
      </div>
      <div className="news-items">
        {filteredNews.map(item => {
          const { id, title, text, date } = item
          return (
            <div className="news-item" key={id}>
              <h3 className="news-item__title">{title}</h3>
              <p className="news-item__text">{date}</p>
              <span className="news-item__num">{text}</span>
            </div>
          )
        })}
      </div>
    </>
  )
}

const mapStateToProps = state => ({
  filteredNews: getFilteredNew(state),
  unapprovedNews: state.unapprovedNews
})

export default connect(mapStateToProps)(NewsItem)
