import React from 'react'

import style from './HeatingAgentDisplay.module.css'

export default function HeatingAgentDisplay({isOn, onToggle}) {
  return (
    <div className={style.root}>
      <h1 className={style.title}>Status: {isOn ? 'On' : 'Off'}</h1>
      <button className={style.button} onClick={onToggle}>
        {isOn ? 'Turn Off' : 'Turn On'}
      </button>
    </div>
  )
}
