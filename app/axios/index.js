import axios from 'axios'
import qs from 'qs'

const http = axios.create({
    baseURL: 'http://route.showapi.com',
    timeout: 10000,
    params: {
        showapi_appid: 40735,
        showapi_sign: '4F1574C061735B1C948459260B76DF95'
    }
})

http.interceptors.request.use((config) => {
    console.log(config)
    return config
}, (error) => {
    return Promise.reject(error)
})

http.interceptors.response.use((response) => {
    return response.data
}, (error) => {
    console.log(error)
    return Promise.reject(error)
})

const get = (url, params = {}) => {
    return http.get(url, {
        params: params || {}
    })
}

const post = (url, data = {}) => {
    return http.post(url, data)
}

export default http

export {
    get,
    post
}
