import Axios, {AxiosRequestConfig} from 'axios'

const Config: AxiosRequestConfig = {
  method: 'GET'
}

const httpClient = (url: string) => Axios({...Config, url}).then(({data}) => data)

export default httpClient
