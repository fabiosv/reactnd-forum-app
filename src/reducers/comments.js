import {
  FETCH_POST_COMMENTS,
  ADD_COMMENT,
  UPDATE_COMMENT,
  DELETE_COMMENT,
  COMMENT_SCORE_UP,
  COMMENT_SCORE_DOWN
} from '../actions/comments'

export default function comments (state = [], action) {
  switch(action.type){
    case FETCH_POST_COMMENTS :
      return action.comments
    case ADD_COMMENT :
      return [...state, action.comment]
    case UPDATE_COMMENT :
      return state.map((comment) => {
        if(comment.id === action.id){
          comment.timestamp = action.comment_data.timestamp
          comment.body = action.comment_data.body
        }
        return comment
      })
    case DELETE_COMMENT :
      return state.filter((comment) => comment.id !== action.comment.id)
    case COMMENT_SCORE_UP :
      return state.map((comment) => {
        if(comment.id === action.id) {
          comment.voteScore += 1
        }
        return comment
      })
    case COMMENT_SCORE_DOWN :
    return state.map((comment) => {
      if(comment.id === action.id) {
        comment.voteScore -= 1
      }
      return comment
    })
    default :
      return state
  }
}