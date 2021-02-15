import httpClient from 'lib/api'
import useSWR from 'swr'
import Weather from './Weather'

// 46.7712,23.6236

export default function WeatherContainer(props) {
  const {data} = useSWR(
    '/api/weather/46.7712,23.6236?units=si',
    httpClient
  )
  return data ? <Weather data={data} {...props} /> : <div>loading</div>
}
