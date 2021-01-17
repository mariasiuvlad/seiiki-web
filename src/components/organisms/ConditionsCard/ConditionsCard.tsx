import React from 'react'
import cx from 'classnames'

import ReadingChart from 'components/molecules/ReadingChart/Suspense'
import HeatingAgentDisplay from 'components/molecules/HeatingAgentDisplay/Suspense'
import SensorDisplay from 'components/molecules/SensorDisplay/Suspense'

import useOptions from './useOptions'

import style from './ConditionsCard.module.css'
import Card from 'components/atoms/Card'
import Typography from 'components/atoms/Typography'
import Separator from 'components/atoms/Separator'
import {Column, Row} from 'components/atoms/Flex'

const options = [
  {value: 12, label: 'last 12 hours'},
  {value: 24, label: 'last 24 hours'},
  {value: 48, label: 'last 48 hours'}
]

export default function ConditionsCard({sensors, className = ''}) {
  const [selected, SelectControl] = useOptions(options, 12)
  const [sensor, SensorSelect] = useOptions(sensors, sensors[0].value)

  return (
    <Card className={cx(className, style.root)}>
      <Column className="relative">
        <Typography
          as="h1"
          className="capitalize font-extralight text-4xl text-left text-shadow w-full p-4"
          text={sensor}
        />
        <SensorSelect
          controlClassName="h-full opacity-0"
          containerClassName="w-full h-full absolute"
        />
      </Column>
      <Column className="flex-1">
        <Row className="items-center pr-4">
          <Typography
            as="h2"
            className="font-extralight text-2xl text-left w-full m-4"
            text="History"
          />
          <SelectControl />
        </Row>
        <ReadingChart
          className="flex-grow w-full"
          sensor={sensor}
          interval={selected}
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
