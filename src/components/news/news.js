import React from 'react'
import NewsItem from '../newsItem'

export default class News extends React.Component {
  render() {
    return (
      <div className="news">
        <form className="news-add" onSubmit={this.onSubmitNews}>
          <input
            type="text"
            className="add-item__input"
            value=""
            onChange={this.onAddNews}
            placeholder="добавить новость..."
          />
          <button className="add-item__btn">Add News</button>
        </form>
        <div className="news-search">
          <input
            className="news-search__input"
            type="text"
            placeholder="найти новость..."
            value=""
            onChange={this.onSearchNews}
          />
        </div>
        <NewsItem />
        <NewsItem />
        <NewsItem />
      </div>
    )
  }
}
