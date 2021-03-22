import cx from 'classnames'
import {DateTime} from 'luxon'

import useSchedule, {ScheduledEventProps} from 'hooks/useSchedule'
import {Column, Row} from 'components/atoms/Flex'

import style from './Schedule.module.css'

const ScheduledEvent: React.FC<ScheduledEventProps> = ({uuid, next, command, isRecurring}) => (
  <Row key={uuid} className="items-center justify-between">
    <p className="font-light">
      {DateTime.fromJSDate(next).toLocaleString(DateTime.TIME_24_SIMPLE)} · {command}
    </p>
    <p
      className={cx(style.label, {
        [style.isRecurring]: isRecurring,
        [style.isOneTime]: !isRecurring
      })}>
      {isRecurring ? 'Repeating' : 'One time'}
    </p>
  </Row>
)

const Schedule = ({className}) => {
  const events = useSchedule()

  return (
    <Column className={cx(className)}>
      <h2 className={cx(style.title)}>Schedule</h2>
      {events.map((job) => (
        <ScheduledEvent key={job.uuid} {...job} />
      ))}
    </Column>
  )
}

export default Schedule