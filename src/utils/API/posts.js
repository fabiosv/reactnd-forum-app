import { API_HOST, headers } from '../settings'

export const get_all_posts = () =>
fetch(`${API_HOST}/posts`, { headers })
  .then(res => res.json())
  .then(data => data)

export const add_new_post = (post) =>
fetch(`${API_HOST}/posts`, {
    method: 'POST',
    headers: {
      ...headers,
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ post })
  }).then(res => res.json())

export const get_post = (post_id) =>
fetch(`${API_HOST}/posts/${post_id}`, { headers })
  .then(res => res.json())
  .then(data => data)

export const vote_on_post = (post_id, option) =>
fetch(`${API_HOST}/posts/${post_id}`, {
  method: 'POST',
  headers: {
    ...headers,
    'Content-Type': 'application/json'
  },
  body: JSON.stringify({ option })
}).then(res => res.json())

export const update_post = (post_id, data) =>
fetch(`${API_HOST}/posts/${post_id}`, {
  method: 'PUT',
  headers: {
    ...headers,
    'Content-Type': 'application/json'
  },
  body: JSON.stringify({ data })
}).then(res => res.json())

export const delete_post = (post_id) =>
fetch(`${API_HOST}/posts/${post_id}`, {
  method: 'DELETE',
  headers: {
    ...headers,
    'Content-Type': 'application/json'
  },
  // body: JSON.stringify({id: post_id})
})
.then(res => res.json())
.then(res => alert(res))