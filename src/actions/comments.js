import * as API from '../utils/API/comments'

export const ADD_COMMENT = 'ADD_COMMENT'
export const EDIT_COMMENT = 'EDIT_COMMENT'
export const VOTE_COMMENT = 'VOTE_COMMENT'
export const DELETE_COMMENT = 'DELETE_COMMENT'

function addComment (comment) {
  return {
    type: ADD_COMMENT,
    comment,
  }
}

function editComment (comment) {
  return {
    type: EDIT_COMMENT,
    comment,
  }
}

function voteComment (comment) {
  return {
    type: VOTE_COMMENT,
    comment,
  }
}

function deleteComment (comment) {
  return {
    type: DELETE_COMMENT,
    comment,
  }
}



export function handleAddComment () {
  return (dispatch) => {
    return API.add_comment()
      .then((comment) => {

      })
      .catch(() => alert('There was an error adding new comment. Try again.'))
  }
}

// export function handleAddGoal (name, cb) {
//   return (dispatch) => {
//     return API.saveGoal(name)
//       .then((goal) => {
//         dispatch(addGoal(goal))
//         cb()
//       })
//       .catch(() => alert('There was an error. Try again.'))
//   }
// }

// export function handleDeleteGoal (goal) {
//   return (dispatch) => {
//     dispatch(removeGoal(goal.id))

//     return API.deleteGoal(goal.id)
//       .catch(() => {
//         dispatch(addGoal(goal))
//         alert('An error occurred. Try again.')
//       })
//   }
// }