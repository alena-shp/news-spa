import moment from 'moment'
import uniqid from 'uniqid'
import {
  USER_COME,
  LOG_IN,
  ADD_NEWS,
  APPROVE_NEWS,
  DELETE_NEWS,
  SEARCH_NEWS
} from './../types'

const user = user => {
  return {
    type: USER_COME,
    login: 'Pavel',
    password: '12345',
    isAdmin: false
  }
}

const authorization = bool => {
  return {
    type: LOG_IN,
    payload: true
  }
}

const newNews = (title, text) => ({
  type: ADD_NEWS,
  payload: {
    title,
    text,
    date: moment().format('DD/MM/YYYY'),
    id: uniqid()
  }
})

const approveNews = id => ({ type: APPROVE_NEWS, payload: id })

const deleteNews = id => ({ type: DELETE_NEWS, payload: id })

const searchNews = searchText => ({ type: SEARCH_NEWS, payload: searchText })

export { user, authorization, newNews, approveNews, deleteNews, searchNews }
