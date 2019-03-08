import * as API from '../utils/API/shared'
import {loaded} from './loading'
import {receiveCategories, selectCategory} from './categories'
import {receivePosts} from './posts'

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
      dispatch(loaded())
    })
  }
}