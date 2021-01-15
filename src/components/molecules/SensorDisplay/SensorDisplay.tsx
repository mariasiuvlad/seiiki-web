import React from 'react'
import cx from 'classnames'
import {DateTime} from 'luxon'

import style from './SensorDisplay.module.css'
import {dateToString} from 'lib/date'
import Typography from '../../atoms/Typography'

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
  /**
   * Displayed as title
   */
  sensor_id?: string
}

const SensorDisplay: React.FC<SensorDisplayProps> = ({
  className = '',
  temp,
  humi,
  time,
  sensor_id
}) => (
  <div className={cx(className, style.root)}>
    <Typography
      as="h3"
      className="capitalize font-extralight text-4xl text-left text-shadow w-full"
      text={sensor_id}
    />
    <div className={style.conditionsContainer}>
      <Typography
        className="text-red-700 dark:text-red-300 text-2xl font-thin"
        text={`${temp}° C`}
      />
      <Typography
        className="text-blue-700 dark:text-blue-300 text-2xl font-thin"
        text={`${humi}%`}
      />
    </div>
    <Typography className={style.time} text={dateToString(time, DateTime.TIME_24_SIMPLE)} />
  </div>
)

export default SensorDisplay
