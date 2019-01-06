import {RECEIVE_CATEGORIES, SELECT_CATEGORY} from '../actions/categories'


export default function selectedCategory (state = 'all', action) {
  switch(action.type) {
    case RECEIVE_CATEGORIES :
      return 'all'
    case SELECT_CATEGORY :
      return action.name
    default :
      return state
  }
}
