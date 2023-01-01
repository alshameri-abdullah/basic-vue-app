import axios from 'axios'
import { Trans } from '@/plugins/Translation'
import { getState } from '@/utils/local-stoage-utils'

const baseURL = `http://127.0.0.1:8000/api`

const apiClient = axios.create({
  baseURL: `${baseURL}`,
  withCredentials: false,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  },
})

apiClient.interceptors.request.use((config) => {
  let lang = getState('lang') || Trans.defaultLocale
  config.baseURL = config.baseURL + `/${lang}`
  return config
})

export function setToken(token) {
  apiClient.defaults.headers.common.Authorization = token
    ? `Bearer ${token}`
    : ''
}

export default {
  async call({ path, data = {}, method = 'POST', config = {} }) {
    const response = await apiClient({
      method,
      url: path,
      data,
      config,
    })
    return response
  },
}
