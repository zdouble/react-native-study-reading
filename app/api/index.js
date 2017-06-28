import { get } from '../axios'

const getTypeList = () => {
    return get('/582-1')
}

const getArticleList = ({typeId, page}) => {
    return get('/582-2', {typeId, page})
}

export {
    getTypeList,
    getArticleList
}
