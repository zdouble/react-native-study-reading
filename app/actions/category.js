import { SET_TYPE_LIST } from '../constants/ActionTypes.js'

const setTypeList = (data) => {
    return {
        type: SET_TYPE_LIST,
        data
    }
}

export { setTypeList }
