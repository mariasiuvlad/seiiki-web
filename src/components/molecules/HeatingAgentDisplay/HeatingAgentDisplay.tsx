import React from 'react'
import cx from 'classnames'

import Typography from 'components/atoms/Typography'
import {Column, Row} from 'components/atoms/Flex'

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
  twoHours?: () => void
}

const HeatingAgentDisplay: React.FC<HeatingAgentDisplayProps> = ({
  className = '',
  isOn,
  onToggle = () => null,
  twoHours = () => null
}) => {
  return (
    <Column className={cx(className, style.root)}>
      <Row className="self-stretch items-center justify-between">
        <Typography as="h3" text="Heating" className={cx(style.title, 'text-shadow')} />
        <Typography
          className={cx(style.right, {
            [style.heatingOff]: !isOn,
            [style.heatingOn]: isOn
          })}
          text={isOn ? 'on' : 'off'}
        />
      </Row>
      <Row className="self-stretch justify-center">
        {!isOn ? (
          <>
            <button className="btn primary rounded-r-none w-1/2 md:w-1/4" onClick={onToggle}>
              Turn On
            </button>
            <button className="btn secondary rounded-l-none w-1/2 md:w-1/4" onClick={twoHours}>
              Two hours
            </button>
          </>
        ) : (
          <button className="btn secondary flex-1" onClick={onToggle}>
            Turn Off
          </button>
        )}
      </Row>
    </Column>
  )
}

export default HeatingAgentDisplay
