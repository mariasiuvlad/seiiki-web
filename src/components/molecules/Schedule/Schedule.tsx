import cx from 'classnames'
import {DateTime} from 'luxon'

import useSchedule, {ScheduledEventProps} from 'hooks/useSchedule'
import {Column, Row} from 'components/atoms/Flex'

import style from './Schedule.module.css'
import {AddCircle} from 'icons'

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
      <Row className={cx(style.header)}>
        <h2>Schedule</h2>
        <button>
          <AddCircle className="w-6 h-6 fill-current" />
        </button>
      </Row>
      {events.map((job) => (
        <ScheduledEvent key={job.uuid} {...job} />
      ))}
    </Column>
  )
}

export default Schedule
