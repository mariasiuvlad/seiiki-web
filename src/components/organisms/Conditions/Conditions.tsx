import React, {useCallback, useState} from 'react'

import {Column, Row} from 'components/atoms/Flex'

import ReadingChart from 'components/molecules/ReadingChart/Suspense'
import SensorDisplay from 'components/molecules/SensorDisplay/Suspense'

import SensorSelector, {SensorSelectorStateChange} from './SensorSelector'
import PeriodSelector, {PeriodSelectorStateChange} from './PeriodSelector'

const periods = [
  {value: 12, label: 'last 12 hours'},
  {value: 24, label: 'last 24 hours'},
  {value: 48, label: 'last 48 hours'}
]

export default function Conditions({className, sensors}) {
  const [period, setPeriod] = useState(periods[0])
  const [sensor, setSensor] = useState(sensors[0])

  const onSensorChange: (changes: SensorSelectorStateChange) => void = useCallback(
    ({selectedItem}) => setSensor(selectedItem),
    []
  )

  const onPeriodChange: (changes: PeriodSelectorStateChange) => void = useCallback(
    ({selectedItem}) => setPeriod(selectedItem),
    []
  )

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
      <ReadingChart
        className="flex-grow w-full"
        sensor={sensor}
        interval={period.value}
        type="area"
        humi
        temp
      />
    </Column>
  )
}
