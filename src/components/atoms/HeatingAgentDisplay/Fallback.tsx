import React from 'react'
import cx from 'classnames'

import style from './HeatingAgentDisplay.module.css'
import Button from '../Button'

export default function HeatingAgentDisplay({className}) {
  return (
    <div className={cx(className, style.root, 'animate-pulse')}>
      <div className="h-6 mb-2">
        <h1 className={cx(style.title)}>
          <span className="inline-block h-5 w-24 bg-black dark:bg-white opacity-30 rounded" />
        </h1>
      </div>
      <Button className="w-24" primary label="&nbsp;" disabled />
      {/* <button className={style.button} disabled>
        <div className="h-4 w-24 bg-white opacity-30 rounded" />
      </button> */}
    </div>
  )
}
