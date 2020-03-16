import React from 'react'

const NewsItem = () => {
  return (
    <div className="news-item">
      <h3 className="news-item__title">Заголовок</h3>
      <p className="news-item__text">Текст новости</p>
      <span className="news-item__num">16 марта 2020</span>
    </div>
  )
}

export default NewsItem
