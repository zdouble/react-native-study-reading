import { SET_USER_ISFIRST } from '../constants/ActionTypes.js'

const setUserIsFirst = (isFirst) => {
    return {
        type: SET_USER_ISFIRST,
        isFirst
    }
}

export { setUserIsFirst }
