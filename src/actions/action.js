import { USER_COME, LOG_IN, ADD_NEWS, APPROVE_NEWS } from './../types'

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
  title, 
  text
})

const approvedNews = news => {
  return {
    type: APPROVE_NEWS,
    approvedNews: [
      {
        title: 'title',
        text: 'text news',
        data: 'data'
      },
      {
        title: 'title2',
        text: 'text news2',
        data: 'data2'
      }
    ]
  }
}

export { user, authorization, newNews, approvedNews }
