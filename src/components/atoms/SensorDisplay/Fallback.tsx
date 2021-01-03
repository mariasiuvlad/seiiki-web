import React from 'react'
import cx from 'classnames'

import style from './SensorDisplay.module.css'

export default function SensorDisplayFallback() {
  return (
    <div className={cx(style.root, 'animate-pulse')}>
      <div className={style.conditionsContainer}>
        <div className="h-4 bg-gray-900 opacity-30 rounded w-32" />
      </div>
      <div className={style.time}>
        <div className="h-4 bg-gray-900 opacity-30 rounded w-12" />
      </div>
    </div>
  )
}
