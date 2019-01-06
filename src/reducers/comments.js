// export default function goals (state = [], action) {
//   switch(action.type) {
//     case ADD_GOAL :
//       return state.concat([action.goal])
//     case REMOVE_GOAL :
//       return state.filter((goal) => goal.id !== action.id)
//     case RECEIVE_DATA :
//       return action.goals
//     default :
//       return state
//   }
// }

import {ADD_COMMENT} from '../actions/comments'
// import {RECEIVE_DATA} from '../actions/shared'

export default function comments (state = [], action) {
  switch(action.type){
    case ADD_COMMENT :
      return 0
    default :
      return state
  }
}