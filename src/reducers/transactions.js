import { RECEIVE_TRANSACTIONS } from '../constants/ActionTypes'

export const transactions = (state = [], action) => {
  switch (action.type) {
    case RECEIVE_TRANSACTIONS:
      return (action.transactions) ? action.transactions : state
    default:
      return state
  }
}
