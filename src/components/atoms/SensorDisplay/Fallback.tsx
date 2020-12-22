import React from 'react'
import cx from 'classnames'

import style from './SensorDisplay.module.css'

export default function SensorDisplayFallback() {
  return (
    <div className={cx(style.root, 'animate-pulse')}>
      <div className={style.conditionsContainer}>
        <p className={style.conditionsItem}>
          <span className="h-4 bg-gray-900 opacity-30 rounded w-32" />
        </p>
      </div>
      <p className={style.time}>
        <span className="h-4 bg-gray-900 opacity-30 rounded w-12" />
      </p>
    </div>
  )
}
