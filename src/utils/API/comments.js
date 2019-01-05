import { API_HOST, headers } from '../settings'

export const get_post_comments = (post_id) =>
fetch(`${API_HOST}/posts/${post_id}/comments`, { headers })
  .then(res => res.json())
  .then(data => data)

export const add_comment = (comment_data) =>
fetch(`${API_HOST}/comments`, {
  method: 'POST',
  headers: {
    ...headers,
    'Content-Type': 'application/json'
  },
  body: JSON.stringify({ comment_data })
}).then(res => res.json())

export const get_comment = (comment_id) =>
fetch(`${API_HOST}/comments/${comment_id}`, { headers })
  .then(res => res.json())
  .then(data => data)

export const vote_on_comment = (comment_id, option) =>
fetch(`${API_HOST}/comments/${comment_id}`, {
  method: 'POST',
  headers: {
    ...headers,
    'Content-Type': 'application/json'
  },
  body: JSON.stringify({ option })
}).then(res => res.json())

export const update_comment = (comment_id, comment_data) =>
fetch(`${API_HOST}/comments/${comment_id}`, {
  method: 'PUT',
  headers: {
    ...headers,
    'Content-Type': 'application/json'
  },
  body: JSON.stringify({ comment_data })
}).then(res => res.json())

export const delete_comment = (comment_id) =>
fetch(`${API_HOST}/comments/${comment_id}`, {
  method: 'DELETE',
  headers: {
    ...headers,
    'Content-Type': 'application/json'
  },
  // body: JSON.stringify({id: post_id})
})
.then(res => res.json())
.then(res => alert(res))