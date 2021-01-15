import React, {useMemo} from 'react'
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

export const colorMap = {
  humi: 'text-blue-600 dark:text-blue-400',
  temp: 'text-red-600 dark:text-red-400',
  status: 'text-green-600 dark:text-green-400'
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

  const chartData = useMemo(
    () =>
      data.map((item, idx) => ({
        ...item,
        status: Math.min(idx % 3, 1),
        timestamp: dateToString(item.timestamp, DateTime.TIME_24_SIMPLE)
      })),
    [data]
  )

  return (
    <div className={className}>
      <ResponsiveContainer height="100%">
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
              hide
              tick={false}
              axisLine={false}
              yAxisId="humi"
              domain={['dataMin - 2', 'dataMax + 2']}
              orientation="right"
            />,
            <ChartElement
              type="basis"
              dataKey="humi"
              className={colorMap['humi']}
              strokeWidth={2}
              stroke="currentColor"
              fill="currentColor"
              yAxisId="humi"
            />
          ]}
          {/* render temperature chart */}
          {temp && [
            <YAxis
              hide
              width={0}
              yAxisId="temp"
              tick={false}
              axisLine={false}
              domain={['dataMin - 0.1', 'dataMax + 0.1']}
            />,
            <ChartElement
              type="basis"
              dataKey="temp"
              strokeWidth={2}
              className={colorMap['temp']}
              stroke="currentColor"
              fill="currentColor"
              yAxisId="temp"
            />
          ]}
        </ChartContainer>
      </ResponsiveContainer>
    </div>
  )
}
