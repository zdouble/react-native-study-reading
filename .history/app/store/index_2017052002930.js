import thunk from 'redux-thunk'
import createLogger from 'redux-logger'
import { createStore, applyMiddleware } from 'redux'
import reducer from '../reducers/index.js'

const loggerMiddleware = createLogger()

const middleware = [thunk]

const store = createStore(
    reducer,
    applyMiddleware(...middleware)
)

export default store
