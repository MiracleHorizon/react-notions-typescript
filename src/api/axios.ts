import axios from 'axios'

const instance = axios.create({
  baseURL: 'http://localhost:5000',
})

instance.interceptors.request.use(config => {
  const token = window.localStorage.getItem('jwt')

  if (config.headers && token) {
    config.headers.Authorization = token
  }

  return config
})

export default instance
