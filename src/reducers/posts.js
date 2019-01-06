import {ADD_POST, RECEIVE_POSTS, POST_SCORE_UP, POST_SCORE_DOWN} from '../actions/posts'

export default function posts (state = [], action) {
  switch(action.type){
    case ADD_POST :
      return 0
    case RECEIVE_POSTS :
      return action.posts
    case POST_SCORE_UP:
      var index = state.findIndex((post) => post.id === action.id)
      state[index].voteScore += 1
      // return {state}
      return JSON.parse(JSON.stringify(state))
    case POST_SCORE_DOWN:
      var index = state.findIndex((post) => post.id === action.id)
      state[index].voteScore -= 1
      return JSON.parse(JSON.stringify(state))
      // return {state}
    default :
      return state
  }
}