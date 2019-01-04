
const api = "https://reactnd-books-api.udacity.com"


// Generate a unique token for storing your bookshelf data on the backend server.
let token = localStorage.token
if (!token)
  token = localStorage.token = Math.random().toString(36).substr(-8)

const headers = {
  'Accept': 'application/json',
  'Authorization': token
}

export const get_categories = () =>
  fetch(`${api}/categories`, { headers })
    .then(res => res.json())
    .then(data => data)

export const get_category_posts = (category_id) =>
  fetch(`${api}/${category_id}/posts`, { headers })
    .then(res => res.json())
    .then(data => data)

export const get_all_posts = () =>
  fetch(`${api}/posts`, { headers })
    .then(res => res.json())
    .then(data => data)

export const add_new_post = (post) =>
  fetch(`${api}/posts`, {
      method: 'POST',
      headers: {
        ...headers,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ post })
    }).then(res => res.json())

export const get_post = (post_id) =>
  fetch(`${api}/posts/${post_id}`, { headers })
    .then(res => res.json())
    .then(data => data)

export const vote_on_post = (post_id, option) =>
  fetch(`${api}/posts/${post_id}`, {
    method: 'POST',
    headers: {
      ...headers,
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ option })
  }).then(res => res.json())

export const update_post = (post_id, data) =>
  fetch(`${api}/posts/${post_id}`, {
    method: 'PUT',
    headers: {
      ...headers,
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ data })
  }).then(res => res.json())

export const delete_post = (post_id) =>
  fetch(`${api}/posts/${post_id}`, {
    method: 'DELETE',
    headers: {
      ...headers,
      'Content-Type': 'application/json'
    },
    // body: JSON.stringify({id: post_id})
  })
  .then(res => res.json())
  .then(res => alert(res))

export const get_post_comments = (post_id) =>
  fetch(`${api}/posts/${post_id}/comments`, { headers })
    .then(res => res.json())
    .then(data => data)

export const add_comment = (comment_data) =>
  fetch(`${api}/comments`, {
    method: 'POST',
    headers: {
      ...headers,
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ comment_data })
  }).then(res => res.json())

export const get_comment = (comment_id) =>
  fetch(`${api}/comments/${comment_id}`, { headers })
    .then(res => res.json())
    .then(data => data)

export const vote_on_comment = (comment_id, option) =>
  fetch(`${api}/comments/${comment_id}`, {
    method: 'POST',
    headers: {
      ...headers,
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ option })
  }).then(res => res.json())

export const update_comment = (comment_id, comment_data) =>
  fetch(`${api}/comments/${comment_id}`, {
    method: 'PUT',
    headers: {
      ...headers,
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ comment_data })
  }).then(res => res.json())

export const delete_comment = (comment_id) =>
  fetch(`${api}/comments/${comment_id}`, {
    method: 'DELETE',
    headers: {
      ...headers,
      'Content-Type': 'application/json'
    },
    // body: JSON.stringify({id: post_id})
  })
  .then(res => res.json())
  .then(res => alert(res))