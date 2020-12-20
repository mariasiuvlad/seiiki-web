import React from 'react'
import {
  XAxis,
  Tooltip,
  YAxis,
  AreaChart,
  Area,
  TooltipProps,
  Legend
} from 'recharts'
import {DateTime} from 'luxon'

const colorMap = {
  humi: 'text-blue-600 dark:text-blue-400',
  temp: 'text-red-600 dark:text-red-400'
}

const CustomTooltip = ({active, payload, label}: TooltipProps) => {
  if (!active || !payload) return null
  return (
    <div className="w-28 bg-white dark:bg-gray-900 px-4 py-2 border border-gray-200 rounded-md opacity-90">
      <p className="text-sm font-thin mb-2">{label}</p>
      {payload.map(({value, dataKey}) => (
        <p key={dataKey as string}>
          <span
            className={`uppercase ${
              colorMap[dataKey as string]
            } text-xs font-black mr-4`}>
            {dataKey}
          </span>
          <span className="">{value}</span>
        </p>
      ))}
    </div>
  )
}

export default function ReadingChart({
  className,
  data,
  humi = false,
  temp = false
}) {
  return (
    <div className={className} style={{margin: -6}}>
      <AreaChart
        width={400}
        height={120}
        data={data.map((item) => ({
          ...item,
          time: DateTime.fromISO(item.time).toLocaleString(
            DateTime.TIME_24_SIMPLE
          )
        }))}>
        <XAxis
          height={0}
          dataKey="time"
          tick={false}
          axisLine={false}
          tickFormatter={({time}) =>
            DateTime.fromISO(time).toLocaleString(DateTime.TIME_24_SIMPLE)
          }
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
