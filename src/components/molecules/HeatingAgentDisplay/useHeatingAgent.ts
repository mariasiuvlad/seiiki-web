import httpClient from 'lib/api'
import {DateTime} from 'luxon'
import {useCallback} from 'react'
import useSWR from 'swr'

const TurnOff = '/api/heating/off'
const TurnOn = '/api/heating/on'

type THeatingAgentResponse = {
  state: boolean
}
export interface UseHeatingAgent {
  isOn: boolean
  onToggle: () => void
  twoHours: () => void
}

export default function useHeatingAgent(): UseHeatingAgent {
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

  const twoHours = useCallback(async () => {
    await httpClient(TurnOn)
    await httpClient('/api/schedule', {
      method: 'POST',
      data: {
        timestamp: DateTime.now().plus({minutes: 30}).toISO(),
        command: 'HEATING_OFF'
      }
    })
  }, [isOn])

  return {isOn, onToggle, twoHours}
}
