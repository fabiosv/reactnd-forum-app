
const api = "https://reactnd-forum-api.herokuapp.com"


// Generate a unique token for storing your bookshelf data on the backend server.
let token = localStorage.token
if (!token)
  token = localStorage.token = Math.random().toString(36).substr(-8)

const headers = {
  'Accept': 'application/json',
  'Authorization': token
}

const generateID = () => {
  return Math.random().toString(36).substr(2, 9)
}

export const fetchCategories = () =>
  fetch(`${api}/categories`, { headers })
    .then(res => res.json())
    .then(data => data)

export const getCategoryPosts = (category_id) =>
  fetch(`${api}/${category_id}/posts`, { headers })
    .then(res => res.json())
    .then(data => data)

export const fetchPosts = () =>
  fetch(`${api}/posts`, { headers })
    .then(res => res.json())
    .then(data => data)

export const addNewPost = (post) =>
  fetch(`${api}/posts`, {
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

export const getPost = (post_id) =>
  fetch(`${api}/posts/${post_id}`, { headers })
    .then(res => res.json())
    .then(data => data)

export const voteOnPost = (post_id, option) =>
  fetch(`${api}/posts/${post_id}`, {
    method: 'POST',
    headers: {
      ...headers,
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ option })
  }).then(res => res.json())

export const updatePost = (post_id, post) =>
  fetch(`${api}/posts/${post_id}`, {
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
  fetch(`${api}/posts/${post_id}`, {
    method: 'DELETE',
    headers: {
      ...headers,
      'Content-Type': 'application/json'
    },
    // body: JSON.stringify({id: post_id})
  })
  .then(res => res.json())
  .then(res => console.log(res))

export const getPostComments = (post_id) =>
  fetch(`${api}/posts/${post_id}/comments`, { headers })
    .then(res => res.json())
    .then(data => data)

export const addComment = (comment_data) =>
  fetch(`${api}/comments`, {
    method: 'POST',
    headers: {
      ...headers,
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ comment_data })
  }).then(res => res.json())

export const getComment = (comment_id) =>
  fetch(`${api}/comments/${comment_id}`, { headers })
    .then(res => res.json())
    .then(data => data)

export const voteOnComment = (comment_id, option) =>
  fetch(`${api}/comments/${comment_id}`, {
    method: 'POST',
    headers: {
      ...headers,
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ option })
  }).then(res => res.json())

export const updateComment = (comment_id, comment_data) =>
  fetch(`${api}/comments/${comment_id}`, {
    method: 'PUT',
    headers: {
      ...headers,
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ comment_data })
  }).then(res => res.json())

export const deleteComment = (comment_id) =>
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