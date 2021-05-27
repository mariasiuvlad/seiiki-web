import cx from 'classnames'
import {Column, Row} from 'components/atoms/Flex'
import ReadingChart from 'components/molecules/ReadingChart'
import SensorDisplay from 'components/molecules/SensorDisplay'

import useConditions from 'hooks/useConditions'

import Select from 'components/atoms/Select'

import style from './Conditions.module.css'

export type ConditionsProps = {
  className?: string
}

export default function Conditions({className = ''}) {
  const {period, sensor, sensors, onSensorChange} = useConditions()

  return (
    <Column className={cx(className, 'flex-grow gap-2 justify-between')}>
      <Row className="items-baseline dark:border-gray-900">
        <Select
          className={style.headerButton}
          containerClassName="flex-1"
          items={sensors.map((s) => ({value: s, label: s}))}
          defaultSelectedItem={{value: sensor, label: sensor}}
          onSelectedItemChange={onSensorChange}
        />
      </Row>
      <SensorDisplay sensor={sensor} className="h-12 px-3" />
      <ReadingChart sensor={sensor} interval={period.value} type="area" humi temp />
    </Column>
  )
}
