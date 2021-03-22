import React from 'react'
import cx from 'classnames'
import {DateTime} from 'luxon'

import style from './SensorDisplay.module.css'
import {dateToString} from 'lib/date'
import Typography from '../../atoms/Typography'
import {Row} from 'components/atoms/Flex'

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

const SensorDisplay: React.FC<SensorDisplayProps> = ({className = '', temp, humi, time}) => (
  <div className={cx(className, style.root)}>
    <Row className="items-center justify-between">
      <Typography
        className="text-blue-700 dark:text-blue-300 text-2xl font-thin"
        text={`${humi}%`}
      />
      <Typography
        className="text-red-700 dark:text-red-300 text-2xl font-thin"
        text={`${temp}° C`}
      />
    </Row>
    <Row className={style.conditionsContainer}>
      <Typography
        className={style.time}
        text={`last update · ${dateToString(time, DateTime.TIME_24_SIMPLE)}`}
      />
    </Row>
  </div>
)

export default SensorDisplay
