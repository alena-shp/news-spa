import moment from 'moment'
import uniqid from 'uniqid'
import {
  AUTH_LOGIN,
  AUTH_LOGOUT,
  ADD_NEWS,
  APPROVE_NEWS,
  DELETE_NEWS,
  SEARCH_NEWS
} from './../types'

const authLogin = (login, password) => {
  return {
    type: AUTH_LOGIN,
    payload: { login, password }
  }
}

const authLogout = () => {
  return {
    type: AUTH_LOGOUT
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

export { authLogin, authLogout, newNews, approveNews, deleteNews, searchNews }
