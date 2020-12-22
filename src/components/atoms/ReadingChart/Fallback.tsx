import React from 'react'
import cx from 'classnames'

import {Loader} from 'icons'

export default function ReadingChartFallback({className}) {
  return (
    <div className={cx(className)} style={{width: 400, height: 120, margin: -6}}>
      <div className="h-full w-full flex items-center justify-center">
        <Loader className="w-16 h-16 fill-current opacity-30" />
      </div>
    </div>
  )
}
