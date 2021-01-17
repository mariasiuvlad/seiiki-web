import React from 'react'
import cx from 'classnames'

import {Loader} from 'icons'

export const ReadingChartError = ({className}) => {
  return (
    <div className={cx(className)}>
      <div className="h-full w-full flex items-center justify-center">No sensor data available</div>
    </div>
  )
}

export default function ConditionsCardFallback({className}) {
  return (
    <div className={cx(className)}>
      <div className="h-full w-full flex items-center justify-center">
        <Loader className="w-16 h-16 fill-current opacity-30" />
      </div>
    </div>
  )
}
