import { SET_CATEGORY_TYPE_LIST } from '../constants/ActionTypes.js'

const setTypeList = (data) => {
    return {
        type: SET_CATEGORY_TYPE_LIST,
        data
    }
}

export { setTypeList }
