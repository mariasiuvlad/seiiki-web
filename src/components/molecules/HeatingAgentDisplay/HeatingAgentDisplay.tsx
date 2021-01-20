import React from 'react'
import cx from 'classnames'

import Button from '../../atoms/Button'
import Typography from '../../atoms/Typography'

import style from './HeatingAgentDisplay.module.css'
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
  onToggle = () => null
}) => {
  return (
    <div className={cx(className, style.root)}>
      <Typography as="h3" text="Heating" className={cx(style.title, 'text-shadow')} />
      <div className={style.info}>
        <Typography className={cx(style.left, 'mr-4')} text="status" />
        <Typography
          className={cx(style.right, {
            [style.heatingOff]: !isOn,
            [style.heatingOn]: isOn
          })}
          text={isOn ? 'on' : 'off'}
        />
      </div>
      <Button
        className="w-full h-8"
        primary={!isOn}
        label={isOn ? 'Turn Off' : 'Turn On'}
        onClick={onToggle}
      />
    </div>
  )
}

export default HeatingAgentDisplay
