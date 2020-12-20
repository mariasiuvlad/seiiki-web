import React from 'react'
import {XAxis, Tooltip, YAxis, AreaChart, Area, TooltipProps} from 'recharts'
import {DateTime} from 'luxon'
import CustomTooltip from './Tooltip'

export const colorMap = {
  humi: 'text-blue-600 dark:text-blue-400',
  temp: 'text-red-600 dark:text-red-400'
}

export default function ReadingChart({className = '', data, humi = false, temp = false}) {
  return (
    <div className={className} style={{margin: -6}}>
      <AreaChart
        width={400}
        height={120}
        data={data.map((item) => ({
          ...item,
          timestamp: DateTime.fromISO(item.timestamp).toLocaleString(
            DateTime.TIME_24_SIMPLE
          )
        }))}>
        <XAxis
          height={0}
          dataKey="timestamp"
          tick={false}
          axisLine={false}
          tickFormatter={({timestamp}) => {
            console.log(timestamp)
            return DateTime.fromISO(timestamp).toLocaleString(
              DateTime.TIME_24_SIMPLE
            )
          }}
        />
        {temp && (
          <YAxis
            width={0}
            yAxisId="temp"
            tick={false}
            axisLine={false}
            domain={['dataMin - 0.1', 'dataMax + 0.1']}
          />
        )}
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
        <Tooltip content={<CustomTooltip />} />
        {temp && (
          <Area
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
          <Area
            type="basis"
            dataKey="humi"
            className={colorMap['humi']}
            strokeWidth={2}
            stroke="currentColor"
            fill="currentColor"
            yAxisId="humi"
          />
        )}
      </AreaChart>
    </div>
  )
}
