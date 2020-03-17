import { ADD_NEWS } from './../types'

const initialState = []

const date = `${new Date().getDate()}/${new Date().getMonth() +
  1}/${new Date().getFullYear()}`

const newsReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_NEWS:
      const news = {
        id: state.length + 1,
        title: action.news,
        text: action.news,
        date: date
      }
      return [...state, news]
    default:
      return state
  }
}

export default newsReducer
