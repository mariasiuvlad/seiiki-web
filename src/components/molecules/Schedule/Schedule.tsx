import React from 'react'
import cx from 'classnames'
import {DateTime} from 'luxon'
import {mutate} from 'swr'
import useSchedule, {isRecurring, nextInvocation, TSchedule} from 'hooks/useSchedule'
import {Column, Row} from 'components/atoms/Flex'
import {map, prop} from 'ramda'
import {mapProps, setKey} from 'lib/ramda'
import httpClient from 'lib/api'
import {formatDate} from 'lib/date'
import {useModal} from './Modal'
import {ParagraphSecondary, ParagraphTertiary} from 'components/atoms/Typography'
import ScheduleEventForm from 'components/forms/ScheduleEventForm'
import Button from 'components/atoms/Button'
import style from './Schedule.module.css'
import Icon from 'components/atoms/Icon'

const Commands = {
  HEATING_ON: 'Heating on',
  HEATING_OFF: 'Heating off'
}

const commandDisplayName = (command) => Commands[command]

const ScheduledEvent: React.FC<TSchedule> = (event) => {
  const onDeleteEvent = async () => {
    await httpClient(`/api/schedule/${event.uuid}`)
    mutate('/api/schedule')
  }
  return (
    <Row className="items-center border-b dark:border-gray-700 p-2">
      <p className="mr-4 font-semibold text-xs w-16">
        {formatDate(DateTime.TIME_24_SIMPLE)(nextInvocation(event))}
      </p>
      <Column className="flex-grow">
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
      </Column>
      <Button icon="TrashIcon" className="hover:text-red-500" onClick={onDeleteEvent} />
    </Row>
  )
}

const Schedule = ({className}) => {
  const events = useSchedule()
  const {isOpen, open, close, Modal} = useModal()

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
        {events.length ? (
          <Column className="gap-1 pb-1 max-h-48 overflow-y-auto p-2">
            {map(mapProps(setKey('uuid'))(ScheduledEvent), events)}
          </Column>
        ) : (
          <Column className="items-center justify-center flex-grow gap-2 text-gray-600">
            <ParagraphSecondary className="font-semibold">No events found</ParagraphSecondary>
            <Icon name="ViewGridAddIcon" className="w-14 h-14 text-gray-400" />
          </Column>
        )}
      </Column>
      {isOpen && (
        <Modal onClose={close}>
          <ScheduleEventForm />
        </Modal>
      )}
    </>
  )
}

export default Schedule
