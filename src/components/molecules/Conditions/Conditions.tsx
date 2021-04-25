import {Column, Row} from 'components/atoms/Flex'
import ReadingChart from 'components/molecules/ReadingChart/Suspense'
import SensorDisplay from 'components/molecules/SensorDisplay/Suspense'

import useConditions from 'hooks/useConditions'

import SensorSelector from './SensorSelector'
import PeriodSelector from './PeriodSelector'

const periods = [
  {value: 12, label: 'last 12 hours'},
  {value: 24, label: 'last 24 hours'},
  {value: 48, label: 'last 48 hours'}
]

export default function Conditions({className, useConditionsHook = useConditions}) {
  const {period, sensor, sensors, onSensorChange, onPeriodChange} = useConditionsHook()

  return (
    <Column className={className}>
      <Row className="justify-between items-baseline mx-4 border-b dark:border-gray-900">
        <SensorSelector
          className="py-2"
          items={sensors}
          defaultSelectedItem={sensor}
          onSelectedItemChange={onSensorChange}
        />
        <PeriodSelector
          items={periods}
          defaultSelectedItem={period}
          onSelectedItemChange={onPeriodChange}
        />
      </Row>
      <SensorDisplay sensor={sensor} className="flex flex-1 m-4" />
      <ReadingChart sensor={sensor} interval={period.value} type="area" humi temp />
    </Column>
  )
}
