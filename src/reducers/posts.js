import {ADD_POST, RECEIVE_POSTS} from '../actions/posts'

export default function posts (state = [], action) {
  switch(action.type){
    case ADD_POST :
      return 0
    case RECEIVE_POSTS :
      return action.posts
    default :
      return state
  }
}