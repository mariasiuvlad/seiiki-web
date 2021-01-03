import React from 'react'
import cx from 'classnames'

import style from './HeatingAgentDisplay.module.css'
import Button from '../Button'

export interface HeatingAgentDisplayProps {
  /**
   * Heating agent status
   */
  isOn: boolean
  /**
   * Custom className
   */
  className?: string
  /**
   * Optional click handler
   */
  onToggle?: () => void
}

const HeatingAgentDisplay: React.FC<HeatingAgentDisplayProps> = ({
  className = '',
  isOn,
  onToggle = () => {}
}) => {
  return (
    <div className={cx(className, style.root)}>
      <div className="flex flex-row self-stretch h-6 mx-2 mb-2 justify-between">
        <p className={style.title}>status</p>
        <span
          className={cx(style.title, 'text-sm', {
            [style.heatingOff]: !isOn,
            [style.heatingOn]: isOn
          })}>
          {isOn ? 'on' : 'off'}
        </span>
      </div>
      <Button className="w-24" primary label={isOn ? 'Turn Off' : 'Turn On'} onClick={onToggle} />
    </div>
  )
}

export default HeatingAgentDisplay
