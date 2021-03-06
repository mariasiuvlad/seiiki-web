import axios, {AxiosRequestConfig} from 'axios'

const Config: AxiosRequestConfig = {
  method: 'GET',
  timeout: 15 * 1000 // 4s timeout
}

// const delay = (v) => new Promise((resolve) => setTimeout(() => resolve(v), 4000))

const httpClient = (url: string, extraConfig: Partial<AxiosRequestConfig> = {}) =>
  axios({...Config, ...extraConfig, url}).then(({data}) => data)
// .then(delay)

export default httpClient
