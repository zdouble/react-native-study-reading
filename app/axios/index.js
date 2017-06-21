import axios from 'axios'

const http = axios.create({
    baseURL: 'https://route.showapi.com',
    timeout: 10000
})

http.interceptors.request.use((config) => {
    return config
}, (error) => {
    return Promise.reject(error)
})

http.interceptors.response.use((response) => {
    return response.data
}, (error) => {
    console.log('出错了')
    return Promise.reject(error)
})

export default http
