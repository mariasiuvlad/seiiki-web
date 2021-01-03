import React from 'react'
import cx from 'classnames'
import {DateTime} from 'luxon'

import style from './SensorDisplay.module.css'
import {dateToString} from 'lib/date'

export interface SensorDisplayProps {
  /**
   * Custom className
   */
  className?: string
  /**
   * Temperature value
   */
  temp: number
  /**
   * Humidity value
   */
  humi: number
  /**
   * Timestamp
   */
  time: string
}

const SensorDisplay: React.FC<SensorDisplayProps> = ({className = '', temp, humi, time}) => (
  <div className={cx(className, style.root)}>
    <div className={style.conditionsContainer}>
      <p>{temp}° C</p>
      <p>{humi}%</p>
    </div>
    <p className={style.time}>{dateToString(time, DateTime.TIME_24_SIMPLE)}</p>
  </div>
)

export default SensorDisplay
