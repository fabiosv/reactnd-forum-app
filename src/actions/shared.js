import * as API from '../utils/API_Complete'
import {receiveCategories} from './categories'
import {receivePosts} from './posts'

export const RECEIVE_DATA = 'RECEIVE_DATA'

function receiveData (categories, posts) {
  return {
    type: RECEIVE_DATA,
    categories,
    posts
  }
}

export function handleInitialData () {
  console.log('handling')
  return (dispatch) => {
    return Promise.all([
      API.fetchCategories(),
      API.fetchPosts()
    ]).then(([ categories, posts ]) => {
      console.log(categories)
      console.log(posts)
      dispatch(receiveCategories(categories))
      dispatch(receivePosts(posts))
    })
  }
}
