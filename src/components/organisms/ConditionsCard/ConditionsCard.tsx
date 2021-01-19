import React, {useCallback, useState} from 'react'
import cx from 'classnames'

import Card from 'components/atoms/Card'
import Typography from 'components/atoms/Typography'
import {Column, Row} from 'components/atoms/Flex'

import ReadingChart from 'components/molecules/ReadingChart/Suspense'
import SensorDisplay from 'components/molecules/SensorDisplay/Suspense'

import SensorSelector, {SensorSelectorStateChange} from './SensorSelector'
import PeriodSelector, {PeriodSelectorStateChange} from './PeriodSelector'

import style from './ConditionsCard.module.css'

const periods = [
  {value: 12, label: 'last 12 hours'},
  {value: 24, label: 'last 24 hours'},
  {value: 48, label: 'last 48 hours'}
]

export default function ConditionsCard({sensors, className = ''}) {
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
    <Card className={cx(className, style.root)}>
      <SensorSelector
        items={sensors}
        defaultSelectedItem={sensor}
        onSelectedItemChange={onSensorChange}
      />
      <Column className="flex-1">
        <Row className="items-center pr-4">
          <Typography as="h2" className={style.subtitle} text="History" />
          <PeriodSelector
            items={periods}
            defaultSelectedItem={period}
            onSelectedItemChange={onPeriodChange}
          />
        </Row>
        <ReadingChart
          className="flex-grow w-full"
          sensor={sensor}
          interval={period.value}
          type="area"
          humi
          temp
        />
      </Column>
      <Row className="flex-1">
        <SensorDisplay sensor={sensor} className="flex flex-1 m-4" />
      </Row>
    </Card>
  )
}
