import React from 'react'
import {TooltipProps} from 'recharts'
import {colorMap} from './ReadingChart'

const CustomTooltip = ({active, payload, label}: TooltipProps) => {
  if (!active || !payload) return null
  return (
    <div className="w-30 bg-white p-2 dark:bg-gray-900 border border-gray-200 rounded-md opacity-90">
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

export default CustomTooltip
