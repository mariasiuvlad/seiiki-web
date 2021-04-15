import React from 'react'
import cx from 'classnames'
import {DateTime} from 'luxon'

import style from './SensorDisplay.module.css'
import {dateToString} from 'lib/date'
import Typography from '../../atoms/Typography'
import {Row} from 'components/atoms/Flex'
import httpClient from 'lib/api'
import useSWR from 'swr'

export interface SensorInfo {
  temp: number
  humi: number
  time: string
}

export interface SensorDisplayProps {
  sensor: string
  /**
   * Custom className
   */
  className?: string
  useSensorDisplayHook?(): SensorInfo
}

const useSensorDisplay = (sensor: string) => {
  const {data} = useSWR<SensorInfo>(`/api/sensor/current?sensor=${sensor}`, httpClient, {
    suspense: true
  })
  return data
}

const SensorDisplay: React.FC<SensorDisplayProps> = ({
  className = '',
  sensor,
  useSensorDisplayHook = useSensorDisplay
}) => {
  const {temp, humi, time} = useSensorDisplayHook(sensor)
  return (
    <div className={cx(className, style.root)}>
      <Row className="items-center justify-between">
        <Typography
          className="text-blue-700 dark:text-blue-300 text-2xl font-thin"
          text={`${humi}%`}
        />
        <Typography
          className="text-red-700 dark:text-red-300 text-2xl font-thin"
          text={`${temp}°`}
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
}

export default SensorDisplay
