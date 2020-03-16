import React from 'react'
import './searchNews.scss'

const SearchNews = () => {
  return (
    <div className="search-news">
      <input
        className="search-news__input"
        type="text"
        placeholder="найти новость..."
        value=""
        onChange={() => {}}
      />
    </div>
  )
}
export default SearchNews
