import * as API from '../utils/API/comments'

export const ADD_COMMENT = 'ADD_COMMENT'
export const EDIT_COMMENT = 'EDIT_COMMENT'
export const VOTE_COMMENT = 'VOTE_COMMENT'
export const DELETE_COMMENT = 'DELETE_COMMENT'
export const FETCH_POST_COMMENTS = 'FETCH_POST_COMMENTS'

export function handleFetchPostComments(post_id) {
  return (dispatch) => {
    return API.get_post_comments(post_id)
      .then((comments) => dispatch(receivePostComments(comments)))
      .catch((error) =>{
        console.log(`Post ID: ${post_id} not found`)
      })
  }
}

function receivePostComments(comments) {
  return {
    type: FETCH_POST_COMMENTS,
    comments
  }
}

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



export function handleAddComment (comment, sucs_calb_fn, err_calb_fn) {
  return (dispatch) => {
    dispatch(addComment(comment))
    return API.add_comment(comment)
      .then(() => sucs_calb_fn())
      .catch(() => {
        console.log('There was an error adding new comment. Try again.')
        err_calb_fn()
      })
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