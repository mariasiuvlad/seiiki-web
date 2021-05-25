import React, {useCallback, useState} from 'react'
import cx from 'classnames'
import {DateTime} from 'luxon'

import useSchedule, {isRecurring, nextInvocation, TSchedule} from 'hooks/useSchedule'
import {Column, Row} from 'components/atoms/Flex'

import style from './Schedule.module.css'
import {map, prop} from 'ramda'
import {mapProps, setKey} from 'lib/ramda'
import {formatDate} from 'lib/date'
import Modal from './Modal'
import {ParagraphTertiary, TitlePrimary} from 'components/atoms/Typography'
import ScheduleEventForm from 'components/forms/ScheduleEventForm'
import Button from 'components/atoms/Button'

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
  <Row className="items-center border-b dark:border-gray-700 p-2">
    <p className="mr-4 font-semibold text-xs w-16">
      {formatDate(DateTime.TIME_24_SIMPLE)(nextInvocation(event))}
    </p>
    <Row className="flex-grow">
      <p className={cx(style.label, style.labelCommand)}>
        {commandDisplayName(prop('command')(event))}
      </p>
      <p
        className={cx(style.label, {
          [style.labelRecurring]: isRecurring(event),
          [style.labelOneTime]: !isRecurring(event)
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
          <Button onClick={open} icon="CalendarIcon" className="hover:text-yellow-300" />
          <ParagraphTertiary className="font-semibold uppercase mx-2">Events</ParagraphTertiary>
          <Button
            onClick={open}
            icon="PlusSmIcon"
            className="hover:bg-gray-700 hover:text-green-300"
          />
        </Row>
        <Column className="gap-1 pb-1 max-h-48 overflow-y-auto p-2">
          {map(mapProps(setKey('uuid'))(ScheduledEvent), events)}
        </Column>
      </Column>
      {isOpen && <Modal onClose={close} />}
    </>
  )
}

export const ScheduleExpanded = ({className}) => {
  const events = useSchedule()
  const {isOpen, close} = useModal()

  return (
    <>
      <Row className={cx(className, 'p-4 flex-wrap')}>
        <Column className="p-2 gap-2 w-96">
          <TitlePrimary light className="text-left">
            Create scheduled action
          </TitlePrimary>
          <ScheduleEventForm />
        </Column>
        <Column className="p-2 gap-2 flex-grow">
          <TitlePrimary light>Events</TitlePrimary>
          <Column>{map(mapProps(setKey('uuid'))(ScheduledEvent), events)}</Column>
        </Column>
      </Row>

      {isOpen && <Modal onClose={close} />}
    </>
  )
}

export default Schedule
