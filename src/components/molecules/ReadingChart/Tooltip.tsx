import React from 'react'
import cx from 'classnames'
import {TooltipProps} from 'recharts'
import Typography from '../../atoms/Typography'

import style from './ReadingChart.module.css'

const ConditionsTooltip = ({active, payload, label}: TooltipProps<string, string>) => {
  if (!active || !payload) return null
  return (
    <div className="w-30 bg-white p-2 dark:bg-gray-900 border border-gray-200 rounded-md opacity-90">
      <p className="text-sm font-thin mb-2">{label}</p>
      {payload.map(({value, dataKey}) => (
        <div className="flex flex-row items-center" key={dataKey as string}>
          <Typography
            key={dataKey as string}
            className={cx(style[dataKey as string], 'tracking-wider uppercase text-xs mr-4')}
            text={dataKey as string}
          />
          <Typography className="text-sm" text={value} />
        </div>
      ))}
    </div>
  )
}

export default ConditionsTooltip
