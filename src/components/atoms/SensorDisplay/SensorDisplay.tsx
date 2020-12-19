import React from 'react'
import {DateTime} from 'luxon'

import style from './SensorDisplay.module.css'

export default function SensorDisplay({data}) {
  return data ? (
    <div className={style.root}>
      <div className={style.conditionsContainer}>
        <p className={style.conditionsItem}>{data.temp}° C</p>
        <p className={style.conditionsItem}>{data.humi}%</p>
      </div>
      <p className={style.time}>
        {DateTime.fromISO(data.time).toLocaleString(DateTime.TIME_24_SIMPLE)}
      </p>
    </div>
  ) : (
    <p>No sensor data available</p>
  )
}
