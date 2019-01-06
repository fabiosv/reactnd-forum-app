export const RECEIVE_CATEGORIES = 'RECEIVE_CATEGORIES'
export const SELECT_CATEGORY = 'SELECT_CATEGORY'

export function receiveCategories(categories) {
  return {
    type: RECEIVE_CATEGORIES,
    categories
  }
}

export function selectCategory(category_name){
  return{
    type: SELECT_CATEGORY,
    name: category_name
  }
}