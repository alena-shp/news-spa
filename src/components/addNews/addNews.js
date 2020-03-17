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
        <textarea
          type="text"
          className="add-news__textarea"
          ref={input => {
            this.textInput = input
          }}
          placeholder="добавить новость..."
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
    addNews: news => {
      return dispatch(newNews(news))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(AddNews)
