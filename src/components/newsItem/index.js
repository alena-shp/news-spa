import React from 'react'
import { connect } from 'react-redux'

import { getFilteredNews, getFilteredUnapprovedNews } from '../../selectors'
import AdminAction from '../adminAction'
import './newsItem.scss'

const NewsItem = ({ filteredNews, filteredUnapprovedNews }) => {
  return (
    <>
      <div className="news-items news-items--unapproved">
        {Object.keys(filteredUnapprovedNews).map(newsId => {
          const { title, text, date } = filteredUnapprovedNews[newsId]
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
  filteredNews: getFilteredNews(state),
  filteredUnapprovedNews: getFilteredUnapprovedNews(state),
  unapprovedNews: state.unapprovedNews
})

export default connect(mapStateToProps)(NewsItem)
