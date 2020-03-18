import React from 'react'
import './addNews.scss'
import { connect } from 'react-redux'
import { newNews } from './../../actions/action'

class AddNews extends React.Component {
  state = {
    title: '',
    text: ''
  }

  onChangeTitle = e => {
    const title = e.target.value
    this.setState({ title })
  }

  onChangeText = e => {
    const text = e.target.value
    this.setState({ text })
  }

  onClickNews = e => {
    e.preventDefault()
    const { title, text } = this.state
    this.props.addNews(title, text)
    this.setState({ title: '', text: '' })
  }

  render() {
    const { title, text } = this.state
    return (
      <div className="add-news">
        <h3 className="add-news__title">Добавить новость</h3>
        <input
          type="text"
          className="add-news__textarea-title"
          value={title}
          onChange={this.onChangeTitle}
          placeholder="введите название новости..."
        />

        <textarea
          type="text"
          className="add-news__textarea-text"
          value={text}
          onChange={this.onChangeText}
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

const mapDispatchToProps = dispatch => ({
  addNews: (title, text) => {
    return dispatch(newNews(title, text))
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(AddNews)
