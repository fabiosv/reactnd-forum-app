import { combineReducers } from 'redux'
import comments from './comments'
import loading from './loading'

export default combineReducers({
  comments,
  loading
})