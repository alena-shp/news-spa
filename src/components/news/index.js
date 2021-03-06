import React from 'react'
import './news.scss'
import NewsItem from '../newsItem'
import AddNews from '../addNews'
import SearchNews from '../searchNews'

export default class News extends React.Component {
  render() {
    return (
      <div className="news">
        <div className="news__items">
          <SearchNews />
          <NewsItem />
        </div>
        <div className="news__action">
          <AddNews />
        </div>
      </div>
    )
  }
}
