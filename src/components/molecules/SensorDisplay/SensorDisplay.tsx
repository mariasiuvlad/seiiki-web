import React from 'react'
import cx from 'classnames'
import {DateTime} from 'luxon'

import style from './SensorDisplay.module.css'
import {formatDate} from 'lib/date'
import {ParagraphSecondary, TitlePrimary} from 'components/atoms/Typography'
import {Row} from 'components/atoms/Flex'
import httpClient from 'lib/api'
import useSWR from 'swr'
import {compose} from 'ramda'

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
  useDataSource?(sensor: string): SensorInfo
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
  useDataSource = useSensorDisplay
}) => {
  const {temp, humi, time} = useDataSource(sensor)
  return (
    <div className={cx(className, style.root)}>
      <Row className="items-center justify-between">
        <TitlePrimary light className="text-blue-700 dark:text-blue-300">
          {humi}%
        </TitlePrimary>
        <TitlePrimary light className="text-red-700 dark:text-red-300">
          {temp}°
        </TitlePrimary>
      </Row>
      <Row className={style.conditionsContainer}>
        <ParagraphSecondary light>
          last update · {compose(formatDate(DateTime.TIME_24_SIMPLE), DateTime.fromISO)(time)}
        </ParagraphSecondary>
      </Row>
    </div>
  )
}

export default SensorDisplay
