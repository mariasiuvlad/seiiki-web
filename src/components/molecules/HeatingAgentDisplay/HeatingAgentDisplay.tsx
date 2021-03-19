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
      <Row className="self-stretch overflow-visible">
        {!isOn ? (
          <>
            <button
              className="flex-1 rounded-l-sm bg-white text-black uppercase text-xs py-2 px-4"
              onClick={onToggle}>
              Turn On
            </button>
            <button
              className="flex-1 rounded-r-sm bg-gray-100 text-black uppercase text-xs py-2 px-4"
              onClick={twoHours}>
              Two hours
            </button>
          </>
        ) : (
          <button
            className="flex-1 rounded-l-sm bg-white text-black uppercase text-xs py-2 px-4"
            onClick={onToggle}>
            Turn Off
          </button>
        )}
      </Row>
    </Column>
  )
}

export default HeatingAgentDisplay
