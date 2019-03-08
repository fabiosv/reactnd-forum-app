import {RECEIVE_CATEGORIES} from '../actions/categories'
import {RECEIVE_POSTS, RECEIVE_POST_INFO} from '../actions/posts'
import { LOADED } from '../actions/loading'


export default function loading (state = true, action) {
  switch(action.type) {
    case RECEIVE_CATEGORIES :
      return true
    case RECEIVE_POSTS :
      return true
    case RECEIVE_POST_INFO :
      return true
    case LOADED :
      return false
    default :
      return state
  }
}
