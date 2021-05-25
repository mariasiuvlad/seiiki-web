import {DateTime} from 'luxon'

export const createDaysInMonth = (date: DateTime) => {
  const dayArray = Array.from(Array(42).keys())
  const days = dayArray.map((i) => date.set({day: i + 1}))
  const newDays = dayArray.map((i) => days[0].set({weekday: 1}).plus({day: i}))
  return newDays
}

export const createTimesInDay = (date: DateTime) => {
  const timeArray = Array.from(Array(96).keys())
  const times = timeArray.map((i) => date.set({hour: Math.floor(i / 4), minute: (i % 4) * 15}))
  return times
}

export const prevMonth = (d) => d.minus({month: 1})
export const nextMonth = (d) => d.plus({month: 1})
