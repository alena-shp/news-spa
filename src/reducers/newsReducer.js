import { ADD_NEWS } from './../types'

const initialState = []

const newsReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_NEWS:
      const { id, title, text, date } = action.payload
      const news = {
        id,
        title,
        text,
        date
      }
      return [...state, news]
    default:
      return state
  }
}

export default newsReducer
