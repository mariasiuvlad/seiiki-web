import Axios, {AxiosRequestConfig} from 'axios'

const ON = '/heating/on'
const OFF = '/heating/off'
const STATUS = '/heating'

const config: AxiosRequestConfig = {
  method: 'GET',
  headers: {Accept: 'application/json'}
}

export const httpClient = (url) => {
  try {
    return Axios({url, ...config})
  } catch (err) {
    console.log(err)
  }
}

export async function turnOn() {
  return httpClient(ON)
}

export async function turnOff() {
  return httpClient(OFF)
}

export async function status() {
  return httpClient(STATUS)
}
