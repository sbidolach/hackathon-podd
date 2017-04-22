import { combineReducers } from 'redux'
import { reducer as form } from 'redux-form'
import { projects } from './projects'
import { suppliers } from './suppliers'

export default combineReducers({
  projects,
  suppliers,
  form
})
