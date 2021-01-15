import React from 'react'
import cx from 'classnames'

import style from './HeatingAgentDisplay.module.css'
import Button from '../Button'

export default function HeatingAgentDisplay({className}) {
  return (
    <div className={cx(className, style.root, 'animate-pulse')}>
      <div className="h-9 bg-gray-900 dark:bg-white opacity-30 rounded w-full" />
      <div className="h-8 bg-gray-900 dark:bg-white opacity-30 rounded w-full" />
      <Button className="w-full h-8" primary label="&nbsp;" disabled />
    </div>
  )
}
