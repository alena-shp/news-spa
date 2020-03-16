import React from 'react'
import NewsItem from '../newsItem'
import AddNews from '../addNews'
import SearchNews from '../searchNews'

export default class News extends React.Component {
  render() {
    return (
      <div className="news">
        <AddNews />
        <SearchNews />
        <NewsItem />
        <NewsItem />
        <NewsItem />
      </div>
    )
  }
}
