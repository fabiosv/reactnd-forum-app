import { combineReducers } from 'redux'
import comments from './comments'
import loading from './loading'
import categories from './categories'
import posts from './posts'
import selectedCategory from './selectedCategory'

export default combineReducers({
  comments,
  loading,
  selectedCategory,
  categories,
  posts
})