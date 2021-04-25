import httpClient from 'lib/api'
import {DateTime} from 'luxon'
import {useCallback} from 'react'
import useSWR, {mutate} from 'swr'

const TurnOff = '/api/heating/off'
const TurnOn = '/api/heating/on'

type THeatingAgentResponse = {
  state: boolean
}
export interface UseHeatingAgent {
  isOn: boolean
  onToggle: () => void
  nHours: (hours: number) => void
}

export default function useHeatingAgent(): UseHeatingAgent {
  const {
    data: {state: isOn}
  } = useSWR<THeatingAgentResponse, any>('/api/heating', httpClient, {
    suspense: true
  })

  const onToggle = useCallback(
    async () => mutate('/api/heating', await httpClient(isOn ? TurnOff : TurnOn), false),
    [isOn]
  )

  const nHours = useCallback(
    async (hours) => {
      onToggle()
      await httpClient('/api/schedule', {
        method: 'POST',
        data: {
          timestamp: DateTime.now().plus({hours: hours}).toISO(),
          command: 'HEATING_OFF'
        }
      })
      mutate('/api/schedule')
    },
    [isOn]
  )

  return {isOn, onToggle, nHours}
}
