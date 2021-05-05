import {Column, Row} from 'components/atoms/Flex'
import ReadingChart from 'components/molecules/ReadingChart'
import SensorDisplay from 'components/molecules/SensorDisplay'

import useConditions from 'hooks/useConditions'

import SensorSelector from './SensorSelector'
import PeriodSelector from './PeriodSelector'

export type ConditionsProps = {
  className?: string
}

export default function Conditions({className = ''}) {
  const {period, periods, sensor, sensors, onSensorChange, onPeriodChange} = useConditions()

  return (
    <Column className={className}>
      <Row className="justify-between items-baseline border-b dark:border-gray-900">
        <SensorSelector
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
