export const API_HOST = "https://reactnd-forum-api.herokuapp.com"

// Generate a unique token for storing your bookshelf data on the backend server.
let token = localStorage.token
if (!token)
  token = localStorage.token = Math.random().toString(36).substr(-8)

export const headers = {
  'Accept': 'application/json',
  'Authorization': token
}

export const generateID = () => {
  return Math.random().toString(36).substr(2, 9)
}