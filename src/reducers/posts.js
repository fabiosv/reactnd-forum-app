import {
  RECEIVE_POSTS,
  RECEIVE_POST_INFO,
  ADD_POST,
  UPDATE_POST,
  DELETE_POST,
  POST_SCORE_UP,
  POST_SCORE_DOWN
} from '../actions/posts'

import {ADD_COMMENT, DELETE_COMMENT} from '../actions/comments'

export default function posts (state = [], action) {
  switch(action.type){
    case ADD_POST :
      return [...state, action.post]
    case UPDATE_POST :
      return action.post
    case DELETE_POST :
      return state.filter((post) => post.id !== action.post.id)
    case RECEIVE_POSTS :
      return action.posts
    case POST_SCORE_UP:
      return state.map((post) => {
        if(post.id === action.id) {
          post.voteScore += 1
        }
        return post
      })
    case POST_SCORE_DOWN:
      return state.map((post) => {
        if(post.id === action.id) {
          post.voteScore -= 1
        }
        return post
      })
    case RECEIVE_POST_INFO :
      return action.post
    case ADD_COMMENT :
      console.log("ADD_COMMENT on POST")
      console.log(action)
      return state.map((post) => {
        post.commentCount += 1
        return post
      })
    case DELETE_COMMENT :
      return state.map((post) => {
        post.commentCount -= 1
        return post
      })
    default :
      return state
  }
}