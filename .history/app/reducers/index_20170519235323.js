import { combineReducers } from 'redux'
import user from './user.js'
import msg from './msg.js'
import todo from './todo.js'

export default combineReducers({
    user,
    msg,
    todo,
})
