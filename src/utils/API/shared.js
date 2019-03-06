import { fetchCategories } from './categories'
import { fetchPosts, getCategoryPosts } from './posts'

export const getInitialData = (category) => {
  if(category === "all") {
    return Promise.all([
      fetchCategories(),
      fetchPosts()
    ])
  } else {
    return Promise.all([
      fetchCategories(),
      getCategoryPosts(category)
    ])
  }
}