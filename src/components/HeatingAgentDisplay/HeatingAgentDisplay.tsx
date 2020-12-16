import React, {useMemo} from 'react'

import style from './HeatingAgentDisplay.module.css'

export default function HeatingAgentDisplay({heating, onToggle}) {
  const label = useMemo(() => (heating?.state ? 'Turn Off' : 'Turn On'), [
    heating
  ])

  return (
    <div className={style.root}>
      <h1 className={style.title}>
        Heating is {heating?.state ? 'on' : 'off'}
      </h1>
      <button className={style.button} onClick={onToggle}>
        {label}
      </button>
    </div>
  )
}
