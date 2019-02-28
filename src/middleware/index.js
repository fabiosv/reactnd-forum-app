
import thunk from 'redux-thunk'
import { applyMiddleware } from 'redux'
// import { browserHistory } from 'react-router'
// import { routerMiddleware } from 'react-router-redux'
import logger from './logger'

export default applyMiddleware(
  thunk,
  logger,
  // routerMiddleware(browserHistory)
)