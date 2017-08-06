import { createStore, combineReducers, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'

import timer from './modules/timer'
import settings from './modules/settings'

const reducer = combineReducers({
  timer,
  settings,
})

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

const configureStore = initialState =>
  createStore(reducer, initialState, composeEnhancers(applyMiddleware(thunk)))

export default configureStore
