import React from 'react'
import cx from 'classnames'

import style from './HeatingAgentDisplay.module.css'

export default function HeatingAgentDisplay({className, isOn, onToggle}) {
  return (
    <div className={cx(className, style.root)}>
      <div className="h-6 mb-2">
        <h1 className={style.title}>Status: {isOn ? 'On' : 'Off'}</h1>
      </div>
      <button className={style.button} onClick={onToggle}>
        {isOn ? 'Turn Off' : 'Turn On'}
      </button>
    </div>
  )
}
