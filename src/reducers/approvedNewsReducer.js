import { APPROVE_NEWS } from './../types'

const initialState = []

const approvedNewsReducer = (state = initialState, action) => {
  switch (action.type) {
    case APPROVE_NEWS:
      return [...state, action.approvedNews]
    default:
      return state
  }
}

export default approvedNewsReducer
