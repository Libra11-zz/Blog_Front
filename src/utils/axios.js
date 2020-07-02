import axios from 'axios'

// create an axios instance
const service = axios.create({
  // baseURL: 'http://127.0.0.1:3000', // url = base url + request url
  baseURL: 'http://39.104.76.103:3000', // url = base url + request url
  // withCredentials: true, // send cookies when cross-domain requests
  timeout: 5000 // request timeout
})

export default service
