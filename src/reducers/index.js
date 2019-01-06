import { combineReducers } from 'redux'
import comments from './comments'
import loading from './loading'
import categories from './categories'
import posts from './posts'

export default combineReducers({
  comments,
  loading,
  categories,
  posts
})