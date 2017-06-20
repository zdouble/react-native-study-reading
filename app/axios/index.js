import axios from 'axios'

const http = axios.create({
    baseURL: 'https://route.showapi.com',
    timeout: 10000,
    
})

http.interceptors.request.use(function (config) {
    return config
}, function (error) {
    return Promise.reject(error)
})

http.interceptors.response.use(function (response) {
    return response.data
}, function (error) {
    console.log('出错了')
    return Promise.reject(error)
})

export default http