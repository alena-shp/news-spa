import { ADD_NEWS } from './../types'

const initialState = {
  news: []
}

const date = `${new Date().getDate()}/${new Date().getMonth() +
  1}/${new Date().getFullYear()}`

const newsReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_NEWS:
      const newNews = {
        id: state.news.length + 1,
        title: action.news,
        text: action.news,
        data: date
      }
      return {
        ...state.news,
        news: [newNews]
      }
    default:
      return state
  }
}

export default newsReducer
