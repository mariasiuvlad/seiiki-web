import Axios, {AxiosRequestConfig} from 'axios'

const Config: AxiosRequestConfig = {
  method: 'GET',
  timeout: 4 * 1000 // 4s timeout
}

const delay = (v) => new Promise((resolve) => setTimeout(() => resolve(v), 2500))

const httpClient = (url: string, extraConfig: Partial<AxiosRequestConfig> = {}) =>
  Axios({...Config, ...extraConfig, url}).then(({data}) => data)
    // .then(delay)

export default httpClient
