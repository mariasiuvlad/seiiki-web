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
    <Row className="items-center">
      <Typography
        as="h3"
        className="capitalize font-extralight text-2xl text-left flex-grow"
        text="Latest reading"
      />
      <Typography className={style.time} text={dateToString(time, DateTime.TIME_24_SIMPLE)} />
    </Row>
    <Row className={style.conditionsContainer}>
      <Typography
        className="text-red-700 dark:text-red-300 text-2xl font-thin"
        text={`${temp}° C`}
      />
      <Typography
        className="text-blue-700 dark:text-blue-300 text-2xl font-thin"
        text={`${humi}%`}
      />
    </Row>
  </div>
)

export default SensorDisplay
