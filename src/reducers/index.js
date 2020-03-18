import { ADD_NEWS, APPROVE_NEWS } from './../types'

const initialState = {
  isAuthorized: false,
  user: null,
  news: [],
  unapprovedNews: {}
}

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_NEWS:
      const { id, title, text, date } = action.payload
      const news = {
        id,
        title,
        text,
        date
      }
      return {
        ...state,
        unapprovedNews: {
          ...state.unapprovedNews,
          [id]: news
        }
      }
    // case APPROVE_NEWS:
    //   return [...state, action.approvedNews]
    default:
      return state
  }
}

export default rootReducer
