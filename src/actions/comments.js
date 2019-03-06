import * as API from '../utils/API/comments'

export const ADD_COMMENT = 'ADD_COMMENT'
export const UPDATE_COMMENT = 'UPDATE_COMMENT'
export const COMMENT_SCORE_UP = 'COMMENT_SCORE_UP'
export const COMMENT_SCORE_DOWN = 'COMMENT_SCORE_DOWN'
export const DELETE_COMMENT = 'DELETE_COMMENT'
export const FETCH_POST_COMMENTS = 'FETCH_POST_COMMENTS'

export function handleFetchPostComments(post_id) {
  console.log(`Fetching comments from post ${post_id}`)
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

function updateComment (comment_id, comment_data) {
  return {
    type: UPDATE_COMMENT,
    id: comment_id,
    comment_data
  }
}

function commentScoredUp(post_id){
  return {
    type: COMMENT_SCORE_UP,
    id: post_id,
    option: 'upVote'
  }
}

function commentScoredDown(post_id){
  return {
    type: COMMENT_SCORE_DOWN,
    id: post_id,
    option: 'downVote'
  }
}

function deleteComment (comment) {
  return {
    type: DELETE_COMMENT,
    comment,
  }
}

export function handleAddComment (comment_data, sucs_calb_fn, err_calb_fn) {
  return (dispatch) => {
    return API.addComment(comment_data)
      .then((comment) => {
        dispatch(addComment(comment))
        sucs_calb_fn()
      })
      .catch(() => {
        console.log('There was an error adding new comment. Try again.')
        err_calb_fn()
      })
  }
}

export function handleCommentScoredUp(comment_id, err_calb_fn){
  return (dispatch) => {
    dispatch(commentScoredUp(comment_id))
    return API.voteOnComment(comment_id, 'upVote')
      .catch(() => {
        console.log('There was an error on voting. Please Try again.')
        err_calb_fn()
        dispatch(commentScoredDown(comment_id))
      })
  }
}

export function handleCommentScoredDown(comment_id, err_callb_fn){
  return (dispatch) => {
    dispatch(commentScoredDown(comment_id))
    return API.voteOnComment(comment_id, 'downVote')
      .catch(() => {
        console.log('There was an error on voting. Please Try again.')
        err_callb_fn()
        dispatch(commentScoredUp(comment_id))
      })
  }
}

export function handleDeleteComment(comment, scs_callb_fn, err_callb_fn) {
  return (dispatch) => {
    return API.deleteComment(comment.id)
      .then((c) => {
        dispatch(deleteComment(comment))
        scs_callb_fn()
      })
      .catch((error) =>{
        console.log(`Comment ID: ${comment.id} not deleted! ${error}`)
        err_callb_fn()
      })
  }
}

export function handleUpdateComment(comment, comment_data, scs_callb_fn, err_callb_fn) {
  return (dispatch) => {
    const actualState = {body: comment.body, timestamp: comment.timestamp}
    dispatch(updateComment(comment.id, comment_data))
    return API.updateComment(comment.id, comment_data)
      .then((c) => {
        console.log(c)
        scs_callb_fn()
      })
      .catch((error) =>{
        console.log(`Comment ID: ${comment.id} not updated!`)
        console.log(error)
        dispatch(updateComment(comment.id, actualState))
        err_callb_fn()
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