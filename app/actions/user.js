import { SET_USER_ISFIRST } from '../constants/action-types.js'

const setUserIsFirst = (isFirst) => {
    return {
        type: SET_USER_ISFIRST,
        isFirst
    }
}

export { setUserIsFirst }
