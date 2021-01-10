import React from 'react'
import {TooltipProps} from 'recharts'
import Typography from '../Typography'
import {colorMap} from './ReadingChart'

const CustomTooltip = ({active, payload, label}: TooltipProps) => {
  if (!active || !payload) return null
  return (
    <div className="w-30 bg-white p-2 dark:bg-gray-900 border border-gray-200 rounded-md opacity-90">
      <p className="text-sm font-thin mb-2">{label}</p>
      {payload.map(({value, dataKey}) => (
        <div className="flex flex-row items-center" key={dataKey as string}>
          <Typography
            key={dataKey as string}
            className={`tracking-wider uppercase ${colorMap[dataKey as string]} text-xs mr-4`}
            text={dataKey as string}
          />
          <Typography className="text-sm" text={value as string} />
        </div>
      ))}
    </div>
  )
}

export default CustomTooltip
