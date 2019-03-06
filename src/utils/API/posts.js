import { API_HOST, headers, generateID } from './settings'

export const fetchPosts = () =>
  fetch(`${API_HOST}/posts`, { headers })
    .then(res => res.json())
    .then(data => data)

export const getCategoryPosts = (category_id) =>
  fetch(`${API_HOST}/${category_id}/posts`, { headers })
    .then(res => res.json())
    .then(data => data)


export const getPost = (post_id) =>
  fetch(`${API_HOST}/posts/${post_id}`, { headers })
    .then(res => res.json())
    .then(data => data)

export const addNewPost = (post) =>
  fetch(`${API_HOST}/posts`, {
      method: 'POST',
      headers: {
        ...headers,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        id: generateID(),
        timestamp: post.timestamp,
        title: post.title,
        body: post.body,
        author: post.author,
        category: post.category
      })
    }).then(res => res.json())

export const voteOnPost = (post_id, option) =>
  fetch(`${API_HOST}/posts/${post_id}`, {
    method: 'POST',
    headers: {
      ...headers,
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ option })
  }).then(res => res.json())

export const updatePost = (post_id, post) =>
  fetch(`${API_HOST}/posts/${post_id}`, {
    method: 'PUT',
    headers: {
      ...headers,
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      title: post.title,
      body: post.body
    })
  }).then(res => res.json())

export const deletePost = (post_id) =>
  fetch(`${API_HOST}/posts/${post_id}`, {
    method: 'DELETE',
    headers: {
      ...headers,
      'Content-Type': 'application/json'
    },
    // body: JSON.stringify({id: post_id})
  })
  .then(res => res.json())
  .then(res => console.log(res))
