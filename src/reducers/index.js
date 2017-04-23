import { combineReducers } from 'redux'
import { reducer as form } from 'redux-form'
import { projects } from './projects'
import { suppliers } from './suppliers'
import { transactions } from './transactions'

export default combineReducers({
  projects,
  transactions,
  suppliers,
  form
})
