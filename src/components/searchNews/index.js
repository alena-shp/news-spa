import React from 'react'
import './searchNews.scss'
import { connect } from 'react-redux'
import { searchNews } from './../../actions/action'

class SearchNews extends React.Component {
  state = {
    searchText: ''
  }

  onChangeLabel = e => {
    const searchText = e.target.value
    this.setState({ searchText })
    this.props.searchNews(searchText)
  }

  render() {
    const { searchText } = this.state
    return (
      <div className="search-news">
        <input
          className="search-news__input"
          type="text"
          placeholder="найти новость..."
          value={searchText}
          onChange={this.onChangeLabel}
        />
      </div>
    )
  }
}

const mapDispatchToProps = dispatch => ({
  searchNews: searchText => dispatch(searchNews(searchText))
})
export default connect(null, mapDispatchToProps)(SearchNews)
