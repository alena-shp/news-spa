import {
  AUTH_LOGIN,
  AUTH_LOGOUT,
  ADD_NEWS,
  APPROVE_NEWS,
  DELETE_NEWS,
  SEARCH_NEWS
} from './../types'

const initialState = {
  authError: undefined,
  user: null,
  news: [],
  unapprovedNews: {},
  searchText: ''
}

const user = {
  login: 'user',
  password: 'user'
}

const admin = {
  login: 'admin',
  password: 'admin'
}

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case AUTH_LOGIN: {
      const { login } = action.payload
      return {
        ...state,
        user: {
          login: login,
          isAdmin: login === 'admin'
        },
        authError: undefined
      }
    }
    case AUTH_LOGOUT: {
      return {
        ...state,
        user: null
      }
    }
    case ADD_NEWS: {
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
    }
    case APPROVE_NEWS: {
      const id = action.payload
      const news = state.unapprovedNews[id]
      let { unapprovedNews } = state
      delete unapprovedNews[id]

      return {
        ...state,
        news: [...state.news, news],
        unapprovedNews
      }
    }
    case DELETE_NEWS: {
      const id = action.payload
      let { unapprovedNews } = state
      delete unapprovedNews[id]

      return {
        ...state,
        unapprovedNews: { ...unapprovedNews }
      }
    }
    case SEARCH_NEWS: {
      return {
        ...state,
        searchText: action.payload
      }
    }
    default:
      return state
  }
}

export default rootReducer
