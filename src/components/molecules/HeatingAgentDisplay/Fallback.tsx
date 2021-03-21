import React from 'react'
import cx from 'classnames'

import {Column} from 'components/atoms/Flex'

import style from './HeatingAgentDisplay.module.css'

export default function HeatingAgentDisplayFallback({className}) {
  return (
    <Column className={cx(className, style.root, 'animate-pulse')}>
      <div className="h-9 bg-gray-900 dark:bg-white opacity-30 rounded w-full" />
      <button className="btn primary w-full h-8">&nbsp;</button>
    </Column>
  )
}
