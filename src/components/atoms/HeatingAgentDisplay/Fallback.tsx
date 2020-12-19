import {Loader} from 'icons'
import React from 'react'

import style from './HeatingAgentDisplay.module.css'

export default function HeatingAgentDisplayFallback() {
  return (
    <div className={style.root}>
      <Loader className="w-16 h-16 fill-current" />
    </div>
  )
}
