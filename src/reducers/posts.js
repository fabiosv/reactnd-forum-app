import {
  RECEIVE_POSTS,
  RECEIVE_POST_INFO,
  ADD_POST,
  UPDATE_POST,
  DELETE_POST,
  POST_SCORE_UP,
  POST_SCORE_DOWN
} from '../actions/posts'

export default function posts (state = [], action) {
  switch(action.type){
    case ADD_POST :
      return [...state, action.post]
    case UPDATE_POST :
      console.log("UPDATE_POST")
      console.log(state)
      // return state.map((post) => post.id === action.post.id ? action.post : post)
      return action.post
    case DELETE_POST :
      return state.filter((post) => post.id !== action.post.id)
    case RECEIVE_POSTS :
      return action.posts
    case POST_SCORE_UP:
      /*var index = state.findIndex((post) => post.id === action.id)
      state[index].voteScore += 1
      return JSON.parse(JSON.stringify(state))*/
      return state.map((post) => {
        if(post.id === action.id) {
          post.voteScore += 1
        }
        return post
      })
    case POST_SCORE_DOWN:
      /*var index = state.findIndex((post) => post.id === action.id)
      state[index].voteScore -= 1
      return JSON.parse(JSON.stringify(state))*/
      return state.map((post) => {
        if(post.id === action.id) {
          post.voteScore -= 1
        }
        return post
      })
    case RECEIVE_POST_INFO :
      return action.post
    default :
      return state
  }
}