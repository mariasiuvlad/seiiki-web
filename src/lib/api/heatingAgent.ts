import Axios, {AxiosRequestConfig} from 'axios'

const HEATING_AGENT_IP = 'http://192.168.0.102'
const ON = `${HEATING_AGENT_IP}/on`
const OFF = `${HEATING_AGENT_IP}/off`
const STATUS = `${HEATING_AGENT_IP}`

const config: AxiosRequestConfig = {
  method: 'GET',
  headers: {Accept: 'application/json'}
}

const action = (url) => {
  try {
    return Axios({url, ...config})
  } catch (err) {
    console.log(err)
  }
}

export async function turnOn() {
  return action(ON)
}

export async function turnOff() {
  return action(OFF)
}

export async function status() {
  return action(STATUS)
}
