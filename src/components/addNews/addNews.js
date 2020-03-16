import React from 'react'
import './addNews.scss'

const AddNews = () => {
  return (
    <div className="add-news">
      <form className="add-news-form" onSubmit={() => {}}>
        <textarea
          type="text"
          className="add-news-form__input"
          value=""
          onChange={() => {}}
          placeholder="добавить новость..."
        />
        <button className="add-news-form__btn">Добавить</button>
      </form>
    </div>
  )
}
export default AddNews
