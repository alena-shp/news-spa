import React from 'react'
import './newsItem.scss'

import { connect } from 'react-redux'
import AdminAction from '../adminAction'

const NewsItem = ({ news, unapprovedNews }) => {
  return (
    <>
      <div className="news-items">
        {news.map(item => {
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
    </>
  )
}

const mapStateToProps = state => ({
  news: state.news,
  unapprovedNews: state.unapprovedNews
})

export default connect(mapStateToProps)(NewsItem)
