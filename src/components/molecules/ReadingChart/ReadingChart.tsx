import React, {useCallback, useMemo, useState} from 'react'
import {evolve, map, compose, prop} from 'ramda'
import useSWR from 'swr'
import cx from 'classnames'
import {
  XAxis,
  Tooltip,
  YAxis,
  LineChart,
  AreaChart,
  Area,
  Line,
  ResponsiveContainer
} from 'recharts'
import {DateTime} from 'luxon'
import CustomTooltip from './Tooltip'
import {formatDate} from 'lib/date'

import style from './ReadingChart.module.css'
import httpClient from 'lib/api'
import {Column} from 'components/atoms/Flex'
import Select from 'components/atoms/Select'
import {SelectOption} from 'components/atoms/Select/Select'
import {UseSelectStateChange} from 'downshift'

export const chartContainerMap = {
  line: LineChart,
  area: AreaChart
}

const chartComponentMap = {
  line: Line,
  area: Area
}

interface Reading {
  timestamp: string
  sensor_id: string
  temp: number
  humi: number
}
export interface ReadingChartProps {
  /**
   * Custom className
   */
  className?: string
  /**
   * Show humiditiy chart
   */
  humi: boolean
  /**
   * Show temperature chart
   */
  temp: boolean
  /**
   * Chart type
   */
  type: 'line' | 'area'
  /**
   * Chart data
   */
  data: Array<Reading>
}

const useChart = (type) => {
  const Container = useMemo(() => chartContainerMap[type], [type])
  const Component = useMemo(() => chartComponentMap[type], [type])
  return [Container, Component]
}

const useSensorHistory = ({interval, sensor}) => {
  const {data} = useSWR(`/api/sensor/chart?interval=${interval}&sensor=${sensor}`, httpClient, {
    suspense: true
  })

  return data
}

export default function ReadingChart({
  className = '',
  interval: _interval,
  sensor,
  humi = false,
  temp = false,
  type = 'line',
  useDataSource = useSensorHistory
}) {
  const [interval, setInterval] = useState(_interval)
  const [ChartContainer, ChartElement] = useChart(type)
  const data = useDataSource({interval, sensor})

  const chartData = useMemo(
    () =>
      map(
        evolve({
          timestamp: compose(formatDate(DateTime.TIME_24_SIMPLE), DateTime.fromISO)
        })
      )(data),
    [data]
  )

  const onPeriodChange: (changes: UseSelectStateChange<SelectOption<number>>) => void = useCallback(
    ({selectedItem}) => setInterval(selectedItem.value),
    []
  )

  return (
    <Column className="items-start">
      <Select
        defaultSelectedItem={{value: 12, label: 'last 12 hours'}}
        items={[
          {value: 12, label: 'last 12 hours'},
          {value: 24, label: 'last 24 hours'},
          {value: 48, label: 'last 48 hours'}
        ]}
        onSelectedItemChange={onPeriodChange}
      />
      <ResponsiveContainer width="100%" height={120} className={cx(className)}>
        <ChartContainer margin={{top: 0, bottom: 0, left: 0, right: 0}} data={chartData}>
          <XAxis
            hide
            dataKey="timestamp"
            tick={false}
            axisLine={false}
            tickFormatter={compose(formatDate(DateTime.TIME_24_SIMPLE), prop('timestamp'))}
          />
          <Tooltip content={<CustomTooltip />} />
          {/* render humidity chart */}
          {humi && [
            <YAxis
              key="humiAxis"
              hide
              tick={false}
              axisLine={false}
              yAxisId="humi"
              domain={['dataMin - 2', 'dataMax + 2']}
              orientation="right"
            />,
            <ChartElement
              key="humiElement"
              type="basis"
              dataKey="humi"
              className={style.humi}
              strokeWidth={2}
              stroke="currentColor"
              fill="currentColor"
              yAxisId="humi"
              dot={false}
            />
          ]}
          {/* render temperature chart */}
          {temp && [
            <YAxis
              key="tempAxis"
              hide
              width={0}
              yAxisId="temp"
              tick={false}
              axisLine={false}
              domain={['dataMin - 0.1', 'dataMax + 0.1']}
            />,
            <ChartElement
              key="tempElement"
              type="basis"
              dataKey="temp"
              strokeWidth={2}
              className={style.temp}
              stroke="currentColor"
              fill="currentColor"
              yAxisId="temp"
              dot={false}
            />
          ]}
        </ChartContainer>
      </ResponsiveContainer>
    </Column>
  )
}
