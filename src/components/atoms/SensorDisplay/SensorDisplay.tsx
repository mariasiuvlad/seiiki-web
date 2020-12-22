import React from 'react'
import {DateTime} from 'luxon'

import style from './SensorDisplay.module.css'
import {dateToString} from 'lib/date'

export default function SensorDisplay({data}) {
  if (!data) return <p>No sensor data available</p>
  const {temp, humi, time} = data

  return (
    <div className={style.root}>
      <div className={style.conditionsContainer}>
        <p className={style.conditionsItem}>{temp}° C</p>
        <p className={style.conditionsItem}>{humi}%</p>
      </div>
      <p className={style.time}>
        {dateToString(time, DateTime.TIME_24_SIMPLE)}
      </p>
    </div>
  )
}
