import React from 'react'
import cx from 'classnames'

import style from './SensorDisplay.module.css'

export default function SensorDisplayFallback({className}) {
  return (
    <div className={cx(className, style.root, 'animate-pulse')}>
      <div className="h-9 bg-gray-900 dark:bg-white opacity-30 rounded w-full" />
      <div className={style.conditionsContainer}>
        <div className="h-8 bg-red-700 dark:bg-red-300 opacity-30 rounded flex-1 mr-2" />
        <div className="h-8 bg-blue-700 dark:bg-blue-300 opacity-30 rounded flex-1 ml-2" />
      </div>
      <div className={style.time}>
        <div className="h-full bg-gray-900 dark:bg-white opacity-30 rounded w-12" />
      </div>
    </div>
  )
}
