import {parseExpression} from 'cron-parser'
import {DateTime} from 'luxon'
import {isNil, propSatisfies} from 'ramda'
import useSWR from 'swr'

export type TSchedule = {
  command: string
  cron: string | null
  timestamp: string | null
  uuid: string
}

export const isRecurring = propSatisfies(isNil, 'timestamp')
export const nextInvocation = ({timestamp, cron}: {timestamp: string; cron: string}) =>
  timestamp
    ? DateTime.fromISO(timestamp)
    : DateTime.fromJSDate(parseExpression(cron).next().toDate())

const useSchedule = () => {
  const {data} = useSWR<TSchedule[]>('/api/schedule', {suspense: true})
  return data
}

export default useSchedule
