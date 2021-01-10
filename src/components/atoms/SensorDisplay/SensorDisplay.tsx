import React from 'react'
import cx from 'classnames'
import {DateTime} from 'luxon'

import style from './SensorDisplay.module.css'
import {dateToString} from 'lib/date'
import Typography from '../Typography'

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
    <Typography
      as="h3"
      className="font-extralight text-4xl text-left text-shadow w-full"
      text="Bedroom"
    />
    <div className={style.conditionsContainer}>
      <Typography text={`${temp}° C`} />
      <Typography text={`${humi}%`} />
    </div>
    <Typography className={style.time} text={dateToString(time, DateTime.TIME_24_SIMPLE)} />
  </div>
)

export default SensorDisplay
