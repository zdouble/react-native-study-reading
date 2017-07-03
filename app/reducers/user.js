import { SET_USER_ISFIRST } from '../constants/action-types.js'

const initState = {
    isFirst: false
}

const user = (state = initState, action) => {
    switch (action.type) {
        case SET_USER_ISFIRST:
            return action.isFirst
        default:
            return state
    }
}

export default user
