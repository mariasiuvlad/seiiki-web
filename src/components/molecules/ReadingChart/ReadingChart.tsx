import React, {useMemo} from 'react'
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
import {dateToString} from 'lib/date'

import style from './ReadingChart.module.css'
import httpClient from 'lib/api'
import useSWR from 'swr'
import TailwindConfig from 'config/tailwind'

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

const useDataHook = ({interval, sensor}) => {
  const {data} = useSWR(`/api/sensor/chart?interval=${interval}&sensor=${sensor}`, httpClient, {
    suspense: true
  })
  return data
}

export default function ReadingChart({
  className = '',
  interval,
  sensor,
  useData = useDataHook,
  humi = false,
  temp = false,
  type = 'line'
}) {
  const [ChartContainer, ChartElement] = useChart(type)
  const data = useData({interval, sensor})

  const chartData = useMemo(
    () =>
      data.map((item) => ({
        ...item,
        timestamp: dateToString(item.timestamp, DateTime.TIME_24_SIMPLE)
      })),
    [data]
  )

  return (
    <ResponsiveContainer
      width="100%"
      height={TailwindConfig.theme.space[40]}
      className={cx(className)}>
      <ChartContainer margin={{top: 0, bottom: 0, left: 0, right: 0}} data={chartData}>
        <XAxis
          hide
          dataKey="timestamp"
          tick={false}
          axisLine={false}
          tickFormatter={({timestamp}) => dateToString(timestamp, DateTime.TIME_24_SIMPLE)}
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
  )
}
