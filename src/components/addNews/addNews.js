import React from 'react'

 const AddNews = () => {
  return (
    <div className="add-news">
      <form className="add-news-form" onSubmit={() => {}}>
        <input
          type="text"
          className="add-news-form__input"
          value=""
          onChange={() => {}}
          placeholder="добавить новость..."
        />
        <button className="add-news-form__btn">Добавить новость</button>
      </form>
    </div>
  )
}
export default AddNews
