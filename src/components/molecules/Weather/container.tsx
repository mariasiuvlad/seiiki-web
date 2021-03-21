import httpClient from 'lib/api'
import useSWR from 'swr'
import Weather from './Weather'

// 46.7712,23.6236 Cluj Napoca

export default function WeatherContainer(props) {
  const {data} = useSWR('/api/weather/46.7712,23.6236?units=si', httpClient, {suspense: true})
  return <Weather data={data} {...props} />
}
