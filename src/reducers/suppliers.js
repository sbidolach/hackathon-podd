import { RECEIVE_SUPPLIERS } from '../constants/ActionTypes'

export const suppliers = (state = [], action) => {
  switch (action.type) {
    case RECEIVE_SUPPLIERS:
      return (action.suppliers) ? action.suppliers : state
    default:
      return state
  }
}
