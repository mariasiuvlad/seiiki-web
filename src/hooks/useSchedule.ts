import {parseExpression} from 'cron-parser'
import {useMemo} from 'react'
import useSWR from 'swr'

export interface ScheduledEventProps {
  uuid: string
  cron: string
  timestamp: string
  command: string
  next: Date
  isRecurring: boolean
}

const Commands = {
  HEATING_ON: 'Heating On',
  HEATING_OFF: 'Heating Off'
}

const mapCommand = ({command, ...rest}) => ({
  ...rest,
  command: Commands[command]
})

const useSchedule = () => {
  const {data} = useSWR('/api/schedule', {suspense: true})
  const events = useMemo<ScheduledEventProps[]>(
    () =>
      data
        .map(mapCommand)
        .map(({cron, timestamp, ...rest}) => ({
          ...rest,
          next: timestamp ? new Date(timestamp) : parseExpression(cron).next().toDate(),
          isRecurring: !timestamp
        }))
        .sort((a, b) => (a.next < b.next ? -1 : 1)),
    [data]
  )
  return events
}

export default useSchedule
