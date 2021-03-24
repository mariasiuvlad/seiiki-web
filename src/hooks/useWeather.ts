import useSWR from 'swr'
import httpClient from 'lib/api'

// 46.7712,23.6236 Cluj Napoca
const useWeather = () => {
  const {data} = useSWR('/api/weather/46.7712,23.6236?units=si', httpClient, {suspense: true})
  return data
}

export default useWeather
