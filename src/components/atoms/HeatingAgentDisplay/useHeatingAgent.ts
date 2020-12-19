import httpClient from 'lib/api'
import {useCallback} from 'react'
import useSWR from 'swr'

const TurnOff = '/api/heating/off'
const TurnOn = '/api/heating/on'

type THeatingAgentResponse = {
  state: boolean
}

export default function useHeatingAgent() {
  const {
    data: {state: isOn},
    mutate
  } = useSWR<THeatingAgentResponse, any>('/api/heating', httpClient, {
    suspense: true
  })

  const onToggle = useCallback(
    async () => mutate(await httpClient(isOn ? TurnOff : TurnOn), false),
    [isOn]
  )

  return {isOn, onToggle}
}
