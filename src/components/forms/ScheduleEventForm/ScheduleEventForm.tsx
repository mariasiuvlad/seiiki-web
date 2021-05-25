import {useCallback, useState} from 'react'
import cx from 'classnames'
import {UseSelectStateChange} from 'downshift'
import httpClient from 'lib/api'
import {DateTime} from 'luxon'
import {mutate} from 'swr'
import Button from 'components/atoms/Button'
import Datepicker from 'components/atoms/Datepicker'
import {Column, Row} from 'components/atoms/Flex'
import Select from 'components/atoms/Select'
import {SelectOption} from 'components/atoms/Select/Select'

type ScheduleEventFormProps = {
  className?: string
}

const ScheduleEventForm: React.FC<ScheduleEventFormProps> = ({className}) => {
  const [date, setDate] = useState(DateTime.now())
  const [command, setCommand] = useState('HEATING_OFF')

  const onActionChange: (changes: UseSelectStateChange<SelectOption<string>>) => void = useCallback(
    ({selectedItem}) => setCommand(selectedItem.value),
    []
  )

  const addEvent = async (d, cmd) => {
    await httpClient('/api/schedule', {
      method: 'POST',
      data: {
        timestamp: d.toISO(),
        command: cmd
      }
    })
  }

  return (
    <Column className={cx(className, 'bg-white dark:bg-gray-900 rounded-md overflow-hidden')}>
      <Row className="w-full">
        <Select
          className="hover:bg-blue-100 dark:hover:bg-gray-700 font-semibold text-gray-600 dark:text-gray-200 flex-1"
          containerClassName="flex-1"
          placeholder="Select action"
          icon="LightningBoltIcon"
          items={[
            {value: 'HEATING_OFF', label: 'Heating Off'},
            {value: 'HEATING_ON', label: 'Heating On'}
          ]}
          onSelectedItemChange={onActionChange}
        />
        <Select
          className="hover:bg-blue-100 dark:hover:bg-gray-700 font-semibold text-gray-600 dark:text-gray-200 flex-1"
          containerClassName="flex-1"
          placeholder="Select type"
          icon="ClockIcon"
          items={[
            {value: 'One time', label: 'One time'},
            {value: 'Repeating', label: 'Repeating'}
          ]}
          defaultSelectedItem={{value: 'One time', label: 'One time'}}
          onSelectedItemChange={onActionChange}
        />
      </Row>
      <Datepicker hasTime date={date} onChange={setDate} />
      <Button
        label="Save"
        className="py-4"
        variant="primary"
        onClick={async () => {
          await addEvent(date, command)
          mutate('/api/schedule')
        }}
      />
    </Column>
  )
}

export default ScheduleEventForm
