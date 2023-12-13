import axios from 'axios'
import baseURL from '../config.js'

const instance = axios.create({
    baseURL: baseURL,
    withCredentials: true
})

export default instance