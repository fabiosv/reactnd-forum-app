import * as API from '../utils/API_Complete'
import {receiveCategories, selectCategory} from './categories'
import {receivePosts} from './posts'

// export const RECEIVE_DATA = 'RECEIVE_DATA'

// function receiveData (categories, posts) {
//   return {
//     type: RECEIVE_DATA,
//     categories,
//     posts
//   }
// }

export function handleInitialData (category) {
  if(typeof(category) === "undefined") {category = "all"}
  return (dispatch) => {
    return API.getInitialData(category)
    .then(([ categories, posts ]) => {
      console.log(categories)
      console.log(posts)
      dispatch(receiveCategories(categories.categories))
      dispatch(receivePosts(posts))
      dispatch(selectCategory(category))
    })
  }
}
