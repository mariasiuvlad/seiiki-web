import React from 'react'
import {DateTime} from 'luxon'
import {AreaChart, Area, XAxis} from 'recharts'

import TailwindConfig from 'config/tailwind'

const TimeTick = ({x, y, payload}) => {
  return (
    <g transform={`translate(${x},${y})`}>
      <text
        dy={-20}
        textAnchor="middle"
        fill={TailwindConfig.theme.textColor.gray[200]}
        fontSize={TailwindConfig.theme.fontSize.xs[0]}
        fontFamily="inherit">
        {DateTime.fromSeconds(payload.value).toLocaleString(DateTime.TIME_SIMPLE)}
      </text>
    </g>
  )
}

const TemperatureTick = ({x, y, payload}) => {
  return (
    <g transform={`translate(${x},${y})`}>
      <text
        textAnchor="middle"
        fill={TailwindConfig.theme.textColor.white}
        fontSize={TailwindConfig.theme.fontSize.xs[0]}
        fontFamily="inherit">
        {`${Math.round(payload.value)}°`}
      </text>
    </g>
  )
}

const Chart = ({data}) => {
  return (
    <AreaChart height={200} width={3000} data={data} margin={{left: -25, right: -25, bottom: -30}}>
      <Area
        className="text-blue-600 dark:text-gray-400"
        strokeWidth={2}
        dot={false}
        type="basis"
        dataKey="temperature"
        stroke="currentColor"
        fill="currentColor"
      />
      <XAxis
        xAxisId={0}
        dataKey="time"
        orientation="bottom"
        tick={TimeTick}
        axisLine={false}
        tickLine={false}
        interval={0}
      />
      <XAxis
        xAxisId={1}
        interval={0}
        dataKey="temperature"
        orientation="top"
        tick={TemperatureTick}
        tickLine={false}
        axisLine={false}
      />
    </AreaChart>
  )
}

export default Chart
