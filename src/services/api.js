import axios from 'axios';

const api = axios.create({
    baseURL: 'http://localhost:9901'
})

export default api;