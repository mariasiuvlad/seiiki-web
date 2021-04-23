import React from 'react'
import {DateTime} from 'luxon'
import {AreaChart, Area, XAxis} from 'recharts'

import TailwindConfig from 'config/tailwind'
import {add, evolve, map} from 'ramda'

const TimeTick = ({x, y, payload}) => {
  return (
    <g transform={`translate(${x},${y - 8})`}>
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
    <g transform={`translate(${x},${y - 20})`}>
      <text
        textAnchor="middle"
        fill={TailwindConfig.theme.textColor.white}
        fontSize={TailwindConfig.theme.fontSize.xs[0]}
        fontFamily="inherit">
        {`${Math.round(payload.value) - 20}°`}
      </text>
    </g>
  )
}

const IconTick = ({x, y, payload}) => {
  return (
    <g transform={`translate(${x - 16},${y + 20})`}>
      <foreignObject className="w-8 h-8">
        <i className={`wi wi-forecast-io-${payload.value} text-white`}></i>
      </foreignObject>
    </g>
  )
}

const Chart = ({data}) => {
  return (
    <AreaChart
      height={200}
      width={3000}
      data={map(evolve({temperature: add(20)}))(data)}
      margin={{left: -25, right: -25, bottom: -30}}>
      <Area
        className="text-blue-600 dark:text-gray-400"
        strokeWidth={2}
        dot={false}
        type="monotone"
        dataKey="temperature"
        stroke="currentColor"
        fill="currentColor"
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
      <XAxis
        xAxisId={0}
        interval={0}
        dataKey="time"
        orientation="bottom"
        tick={TimeTick}
        tickLine={false}
        axisLine={false}
      />
      <XAxis
        axisLine={false}
        xAxisId={2}
        interval={0}
        dataKey="icon"
        orientation="top"
        tick={IconTick}
        tickLine={false}
      />
    </AreaChart>
  )
}

export default Chart
