import axios from 'axios'

const customFetch = axios.create({
  // baseURL: 'https://redinking.cyclic.cloud/api/v1',
  baseURL: 'http://localhost:9000/api/v1',
})

export default customFetch
