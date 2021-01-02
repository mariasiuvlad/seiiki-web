import React, {useMemo} from 'react'
import {XAxis, Tooltip, YAxis, LineChart, AreaChart, Area, Line} from 'recharts'
import {DateTime} from 'luxon'
import CustomTooltip from './Tooltip'
import {dateToString} from 'lib/date'

export const colorMap = {
  humi: 'text-blue-600 dark:text-blue-400',
  temp: 'text-red-600 dark:text-red-400'
}

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

export default function ReadingChart({
  className = '',
  data,
  humi = false,
  temp = false,
  type = 'line'
}) {
  const [ChartContainer, ChartElement] = useChart(type)

  return (
    <div className={className} style={{width: 400, height: 120, margin: -6}}>
      <ChartContainer
        width={400}
        height={120}
        data={data.map((item) => ({
          ...item,
          timestamp: dateToString(item.timestamp, DateTime.TIME_24_SIMPLE)
        }))}>
        <XAxis
          height={0}
          dataKey="timestamp"
          tick={false}
          axisLine={false}
          tickFormatter={({timestamp}) => dateToString(timestamp, DateTime.TIME_24_SIMPLE)}
        />
        {humi && (
          <YAxis
            width={0}
            tick={false}
            axisLine={false}
            yAxisId="humi"
            domain={['dataMin - 2', 'dataMax + 2']}
            orientation="right"
          />
        )}
        {temp && (
          <YAxis
            width={0}
            yAxisId="temp"
            tick={false}
            axisLine={false}
            domain={['dataMin - 0.1', 'dataMax + 0.1']}
          />
        )}
        <Tooltip content={<CustomTooltip />} />
        {temp && (
          <ChartElement
            type="basis"
            dataKey="temp"
            strokeWidth={2}
            className={colorMap['temp']}
            stroke="currentColor"
            fill="currentColor"
            yAxisId="temp"
          />
        )}
        {humi && (
          <ChartElement
            type="basis"
            dataKey="humi"
            className={colorMap['humi']}
            strokeWidth={2}
            stroke="currentColor"
            fill="currentColor"
            yAxisId="humi"
          />
        )}
      </ChartContainer>
    </div>
  )
}
