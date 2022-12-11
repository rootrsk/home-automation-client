import axios from 'axios'
const baseURL = ''
import './interceptors'
const instance = axios.create({
    baseURL,
    headers:{}
}) 
export default instance