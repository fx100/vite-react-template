import axios from 'axios'

export const request = axios.create({
  baseURL: '/',
  timeout: 5000,
})

request.interceptors.request.use(
  (config) => {
    return config
  },
  (err) => Promise.reject(err),
)

request.interceptors.response.use(
  (response) => {
    return response
  },
  (err) => Promise.reject(err),
)

export default request
