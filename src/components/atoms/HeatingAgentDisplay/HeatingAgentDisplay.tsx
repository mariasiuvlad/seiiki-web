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
      <div className="h-6 mb-2">
        <h1 className={style.title}>
          status &nbsp;
          <span
            className={cx('text-sm', {
              [style.heatingOff]: !isOn,
              [style.heatingOn]: isOn
            })}>
            {isOn ? 'on' : 'off'}
          </span>
        </h1>
      </div>
      <Button
        primary
        label={isOn ? 'Turn Off' : 'Turn On'}
        onClick={onToggle}
      />
    </div>
  )
}

export default HeatingAgentDisplay
