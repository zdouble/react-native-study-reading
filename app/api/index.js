import { post } from '../axios'

const getTypeList = () => {
    return post('/582-1')
}

export {
    getTypeList
}
