import React from 'react'
import './addNews.scss'
import { connect } from 'react-redux'
import { newNews } from './../../actions/action'

class AddNews extends React.Component {
  onClickNews = e => {
    e.preventDefault()
    let news = this.textInput.value
    this.props.addNews(news)
  }
  render() {
    return (
      <div className="add-news">
        <form className="add-news-form">
          <textarea
            type="text"
            className="add-news-form__input"
            ref={input => {
              this.textInput = input
            }}
            placeholder="добавить новость..."
          />
          <button className="add-news-form__btn" onClick={this.onClickNews}>
            Добавить
          </button>
        </form>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    news: state.news
  }
}
const mapDispatchToProps = dispatch => {
  return {
    addNews: news => {
      return dispatch(newNews(news))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(AddNews)
