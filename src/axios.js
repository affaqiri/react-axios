import axios from 'axios'

// The default axios intercepters configured in index.js are not available anymore for this instance and needs to be configured manullay per instance 
const instance = axios.create({
  baseURL: 'https://jsonplaceholder.typicode.com'
})

// Override configuration per instance
instance.defaults.headers.common['Authorization'] = 'AUTH_TOKEN_FROM_INSTANCE'

export default instance
