import { SET_CATEGORY_TYPE_LIST } from '../constants/action-types.js'

const setTypeList = (data) => {
    return {
        type: SET_CATEGORY_TYPE_LIST,
        data
    }
}

export { setTypeList }
