import { SET_USER_ISFIRST } from '../constants/action-types.js'

const initState = {
    isFirst: true
}

const user = (state = initState, action) => {
    switch (action.type) {
        case SET_USER_ISFIRST:
            return { ...state, isFirst: action.isFirst }
        default:
            return state
    }
}

export default user
