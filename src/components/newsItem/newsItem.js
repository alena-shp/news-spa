import React from 'react'
import './newsItem.scss'

import { connect } from 'react-redux'

const NewsItem = ({ news }) => {

  const newsList = news.map(item => {
    const { id, title, text, date } = item
    return (
      <div className="news-item" key={id}>
        <h3 className="news-item__title">{title}</h3>
        <p className="news-item__text">{date}</p>
        <span className="news-item__num">{text}</span>
      </div>
    )
  })
  return <div className="news-item">{newsList}</div>
}

const mapStateToProps = state => ({ news: state })

export default connect(mapStateToProps)(NewsItem)
