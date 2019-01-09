import {RECEIVE_CATEGORIES} from '../actions/categories'
import {RECEIVE_POSTS, RECEIVE_POST_INFO} from '../actions/posts'


export default function loading (state = true, action) {
  switch(action.type) {
    case RECEIVE_CATEGORIES :
      return false
    case RECEIVE_POSTS :
      return false
    case RECEIVE_POST_INFO :
      return false
    default :
      return state
  }
}
