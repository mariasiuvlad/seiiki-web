import {DateTime, DateTimeFormatOptions} from 'luxon'

// configure presets
Object.assign(DateTime.TIME_24_SIMPLE, {weekday: 'short'})

export function dateToString(date: string, preset: DateTimeFormatOptions) {
  return DateTime.fromISO(date).toLocaleString(preset)
}
