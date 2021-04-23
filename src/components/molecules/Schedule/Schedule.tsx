import React, {useCallback, useState} from 'react'
import cx from 'classnames'
import {DateTime} from 'luxon'

import useSchedule, {isRecurring, nextInvocation, TSchedule} from 'hooks/useSchedule'
import {Column, Row} from 'components/atoms/Flex'

import style from './Schedule.module.css'
import * as Icons from 'icons'
import {map, prop} from 'ramda'
import {mapProps, setKey} from 'lib/ramda'
import {formatDate} from 'lib/date'
import Modal from './Modal'

const Commands = {
  HEATING_ON: 'Heating on',
  HEATING_OFF: 'Heating off'
}

const commandDisplayName = (command) => Commands[command]

const useModal = () => {
  const [isOpen, setOpen] = useState(false)
  const open = useCallback(() => setOpen(true), [])
  const close = useCallback(() => setOpen(false), [])

  return {isOpen, open, close}
}

const ScheduledEvent: React.FC<TSchedule> = (event) => (
  <Row className="items-center justify-between">
    <p className="mr-4 font-light">{formatDate(DateTime.TIME_24_SIMPLE)(nextInvocation(event))}</p>
    <Row className="w-48 gap-2">
      <p className={cx(style.label, style.command, 'flex-1 text-center')}>
        {commandDisplayName(prop('command')(event))}
      </p>
      <p
        className={cx(style.label, 'flex-1 text-center', {
          [style.recurring]: isRecurring(event),
          [style.oneTime]: !isRecurring(event)
        })}>
        {isRecurring(event) ? 'Repeating' : 'One time'}
      </p>
    </Row>
  </Row>
)

const Schedule = ({className}) => {
  const events = useSchedule()
  const {isOpen, open, close} = useModal()

  return (
    <>
      <Column className={cx(className)}>
        <Row className={cx(style.header)}>
          <h2>Schedule</h2>
          <button onClick={open}>
            <Icons.AddCircle className="w-6 h-6 fill-current" />
          </button>
        </Row>
        {map(mapProps(setKey('uuid'))(ScheduledEvent), events)}
      </Column>
      {isOpen && <Modal onClose={close} />}
    </>
  )
}

export default Schedule
