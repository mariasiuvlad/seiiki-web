import Axios, {AxiosRequestConfig} from 'axios'

const Config: AxiosRequestConfig = {
  method: 'GET'
}

const delay = (v) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(v)
    }, 2500)
  })
}

const httpClient = (url: string) =>
  Axios({...Config, url})
    .then(({data}) => data)
    // .then(delay)

export default httpClient
