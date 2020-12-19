import Axios, {AxiosRequestConfig} from 'axios'

const Hostname = process.env.HEATING_AGENT_ADDR || '192.168.0.102'
const Actions = {
  On: process.env.HEATING_AGENT_ON || '/on',
  Off: process.env.HEATING_AGENT_OFF || '/off',
  Status: process.env.HEATING_AGENT_STATUS || '/'
}

const config: AxiosRequestConfig = {
  baseURL: `http://${Hostname}`,
  method: 'GET',
  headers: {Accept: 'application/json'}
}

console.log('@config', config)

const client = (url: string) => {
  try {
    return Axios({url, ...config})
  } catch (err) {
    console.log(err)
  }
}

export async function turnOn() {
  return client(Actions.On)
}

export async function turnOff() {
  return client(Actions.Off)
}

export async function status() {
  return client(Actions.Status)
}
