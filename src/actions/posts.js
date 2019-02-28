import * as API from '../utils/API_Complete'

export const RECEIVE_POSTS = 'RECEIVE_POSTS'
export const RECEIVE_POST_INFO = 'RECEIVE_POST_INFO'
export const ADD_POST = 'ADD_POST'
export const UPDATE_POST = 'UPDATE_POST'
export const DELETE_POST = 'DELETE_POST'
export const VOTE_POST = 'VOTE_POST'
export const POST_SCORE_UP = 'POST_SCORE_UP'
export const POST_SCORE_DOWN = 'POST_SCORE_DOWN'


export function receivePosts(posts) {
  return {
    type: RECEIVE_POSTS,
    posts
  }
}

export function receivePostInfo(post) {
  return {
    type: RECEIVE_POST_INFO,
    post
  }
}

export function addPost(post) {
  return {
    type: ADD_POST,
    post
  }
}

export function updatePost(post) {
  return {
    type: UPDATE_POST,
    post
  }
}

export function deletePost(post) {
  return {
    type: DELETE_POST,
    post
  }
}

export function postScoredUp(post_id){
  return {
    type: POST_SCORE_UP,
    id: post_id,
    option: 'upVote'
  }
}

export function postScoredDown(post_id){
  return {
    type: POST_SCORE_DOWN,
    id: post_id,
    option: 'downVote'
  }
}

export function handleAddPost(post, sucs_calb_fn, err_calb_fn) {
  return (dispatch) => {
    return API.addNewPost(post)
      .then((p) => {
        dispatch(addPost(post))
        sucs_calb_fn()
      })
      .catch((error) =>{
        console.log(`Post Add Action: ${error} not found`)
        err_calb_fn()
      })
  }
}

export function handleUpdatePost(post, sucs_calb_fn, err_calb_fn) {
  return (dispatch) => {
    return API.updatePost(post.id, post)
      .then((p) => {
        dispatch(updatePost(post))
        sucs_calb_fn()
      })
      .catch((error) =>{
        console.log(`Post Update Action: ${error} not found`)
        err_calb_fn()
      })
  }
}

export function handleDeletePost(post) {
  return (dispatch) => {
    return API.deletePost(post.id)
      .then((p) => dispatch(deletePost(post)))
      .catch((error) =>{
        console.log(`Post ID: ${post.id} not deleted!`)
      })
  }
}

export function handleReceivePostInfo(post_id) {
  return (dispatch) => {
    return API.getPost(post_id)
      .then((post) => dispatch(receivePostInfo(post)))
      .catch((error) =>{
        console.log(`Post ID: ${post_id} not found`)
      })
  }
}

export function handlePostScoredUp(post_id, err_calb_fn){
  return (dispatch) => {
    dispatch(postScoredUp(post_id))
    return API.voteOnPost(post_id, 'upVote')
      .catch(() => {
        alert('There was an error on voting. Please Try again.')
        err_calb_fn()
        dispatch(postScoredDown(post_id))
      })
  }
}

export function handlePostScoredDown(post_id, err_calb_fn){
  return (dispatch) => {
    dispatch(postScoredDown(post_id))
    return API.voteOnPost(post_id, 'downVote')
      .catch(() => {
        alert('There was an error on voting. Please Try again.')
        err_calb_fn()
        dispatch(postScoredUp(post_id))
      })
  }
}

