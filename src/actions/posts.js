import * as API from '../utils/API_Complete'

export const RECEIVE_POSTS = 'RECEIVE_POSTS'
export const ADD_POST = 'ADD_POST'
export const VOTE_POST = 'VOTE_POST'
export const POST_SCORE_UP = 'POST_SCORE_UP'
export const POST_SCORE_DOWN = 'POST_SCORE_DOWN'


export function receivePosts(posts) {
  return {
    type: RECEIVE_POSTS,
    posts
  }
}

export function voteOnPost(post_id, vote){
  return {
    type: VOTE_POST,
    id: post_id,
    option: vote
  }
}

export function postScoredUp(post_id){
  return {
    type: POST_SCORE_UP,
    id: post_id,
    option: 'scoreUp'
  }
}

export function postScoredDown(post_id){
  return {
    type: POST_SCORE_DOWN,
    id: post_id,
    option: 'scoreDown'
  }
}

// export function handlePostVote(post_id, vote, cb){
//   return (dispatch) => {
//     return API.saveGoal(name)
//       .then((goal) => {
//         dispatch(addGoal(goal))
//         cb()
//       })
//       .catch(() => alert('There was an error. Try again.'))
//   }
// }