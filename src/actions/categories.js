import * as API from '../utils/API/categories'
import {loaded} from './loading'
export const RECEIVE_CATEGORIES = 'RECEIVE_CATEGORIES'
export const SELECT_CATEGORY = 'SELECT_CATEGORY'

export function receiveCategories(categories) {
  return {
    type: RECEIVE_CATEGORIES,
    categories
  }
}

export function selectCategory(selectedCategory){
  console.log(`Action value: ${selectedCategory}`)
  return{
    type: SELECT_CATEGORY,
    name: selectedCategory
  }
}

export function handleReceiveCategories() {
  return (dispatch) => {
    return API.fetchCategories()
      .then((categories) => {
        dispatch(receiveCategories(categories.categories))
        dispatch(loaded())
      })
      .catch((error) =>{
        console.log(`Post ID: ${error} not found`)
        dispatch(loaded())
      })
  }
}