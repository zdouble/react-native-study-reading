import http from '../axios'

const getTypeList = () => {
    http('/582')
        .then(res => console.log(res))
}

export {
    getTypeList
}
