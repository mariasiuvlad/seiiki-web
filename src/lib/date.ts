import {DateTime, DateTimeFormatOptions} from 'luxon'

// configure presets
Object.assign(DateTime.TIME_24_SIMPLE, {weekday: 'short'})

export const formatDate = (options: DateTimeFormatOptions = DateTime.TIME_24_SIMPLE) => (
  date: DateTime
) => date.toLocaleString(options)

export function dateToString(date: string, preset: DateTimeFormatOptions) {
  return DateTime.fromISO(date).toLocaleString(preset)
}
