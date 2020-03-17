import React from 'react'
import './addNews.scss'
import { connect } from 'react-redux'
import { newNews } from './../../actions/action'

class AddNews extends React.Component {
  onClickNews = e => {
    e.preventDefault()
    let text = this.textInput.value
    let title = this.titleInput.value
    this.props.addNews(title, text)
  }
  render() {
    return (
      <div className="add-news">
        <h3 className="add-news__title">Добавить новость</h3>
        <textarea
          type="text"
          className="add-news__textarea-title"
          ref={input => {
            this.titleInput = input
          }}
          placeholder="введите название новости..."
        />
        <textarea
          type="text"
          className="add-news__textarea-text"
          ref={input => {
            this.textInput = input
          }}
          placeholder="напишите текст новости..."
        />
        <button className="add-news__btn" onClick={this.onClickNews}>
          Добавить
        </button>
      </div>
    )
  }
}

const mapStateToProps = state => ({ news: state })

const mapDispatchToProps = dispatch => {
  return {
    addNews: (title, text) => {
      return dispatch(newNews(title, text))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(AddNews)
