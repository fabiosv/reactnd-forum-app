import { API_HOST, headers, generateID } from './settings'

export const get_post_comments = (post_id) =>
fetch(`${API_HOST}/posts/${post_id}/comments`, { headers })
  .then(res => res.json())
  .then(data => data)

export const addComment = (comment_data) =>
  fetch(`${API_HOST}/comments`, {
    method: 'POST',
    headers: {
      ...headers,
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      id: generateID(),
      timestamp: comment_data.timestamp,
      body: comment_data.body,
      author: comment_data.author,
      parentId: comment_data.parentId

    })
  }).then(res => res.json())

export const getComment = (comment_id) =>
  fetch(`${API_HOST}/comments/${comment_id}`, { headers })
    .then(res => res.json())
    .then(data => data)

export const voteOnComment = (comment_id, option) =>
  fetch(`${API_HOST}/comments/${comment_id}`, {
    method: 'POST',
    headers: {
      ...headers,
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ option })
  }).then(res => res.json())

export const updateComment = (comment_id, comment_data) =>
  fetch(`${API_HOST}/comments/${comment_id}`, {
    method: 'PUT',
    headers: {
      ...headers,
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      timestamp: comment_data.timestamp,
      body: comment_data.body,
    })
  }).then(res => res.json())

export const deleteComment = (comment_id) =>
  fetch(`${API_HOST}/comments/${comment_id}`, {
    method: 'DELETE',
    headers: {
      ...headers,
      'Content-Type': 'application/json'
    },
    // body: JSON.stringify({id: post_id})
  })
  .then(res => res.json())
  .then(res => res)