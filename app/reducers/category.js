import { SET_TYPE_LIST } from '../constants/actionTypes.js'

const category = (state = null, action) => {
    switch (action.type) {
        case SET_TYPE_LIST:
            return action.data
        default:
            return state
    }
}

export default category
