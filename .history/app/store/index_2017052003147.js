import thunk from 'redux-thunk'
import logger  from 'redux-logger'
import { createStore, applyMiddleware } from 'redux'
import reducer from '../reducers'

const loggerMiddleware = createLogger()

const middleware = [thunk]

if (__DEV__) {
  middlewares.push(logger);
}

const store = createStore(
    reducer,
    applyMiddleware(...middleware)
)

export default store
