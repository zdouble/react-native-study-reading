import thunk from 'redux-thunk'
import logger from 'redux-logger'
import { createStore, applyMiddleware } from 'redux'
import reducer from '../reducers'

const middlewares = [thunk]

if (__DEV__) {
    middlewares.push(logger)
}

const store = createStore(
    reducer,
    applyMiddleware(...middlewares)
)

export default store
