import React from 'react'
import './newsItem.scss'

const NewsItem = () => {
  return (
    <div className="news-item">
      <h3 className="news-item__title">Заголовок</h3>
      <span className="news-item__num">16 марта 2020</span>
      <p className="news-item__text">Текст новости</p>
    </div>
  )
}

export default NewsItem
