import { API_HOST, headers } from './settings'

export const fetchCategories = () =>
  fetch(`${API_HOST}/categories`, { headers })
    .then(res => res.json())
    .then(data => data)

export const get_category_posts = (category_id) =>
  fetch(`${API_HOST}/${category_id}/posts`, { headers })
    .then(res => res.json())
    .then(data => data)
