import React from 'react'
import cx from 'classnames'

import ReadingChart from 'components/molecules/ReadingChart/Suspense'
import SensorDisplay from 'components/molecules/SensorDisplay/Suspense'

import useOptions from './useOptions'

import style from './ConditionsCard.module.css'
import Card from 'components/atoms/Card'
import Typography from 'components/atoms/Typography'
import {Column, Row} from 'components/atoms/Flex'
import {useSelect} from 'downshift'
import SensorSelector from './SensorSelector'

const options = [
  {value: 12, label: 'last 12 hours'},
  {value: 24, label: 'last 24 hours'},
  {value: 48, label: 'last 48 hours'}
]

export default function ConditionsCard({sensors, className = ''}) {
  const [selected, SelectControl] = useOptions(options, 12)
  const selector = useSelect({items: sensors, defaultSelectedItem: sensors[0]})
  const {selectedItem} = selector

  return (
    <Card className={cx(className, style.root, 'overflow-visible')}>
      <SensorSelector sensors={sensors} {...selector} />
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
          sensor={selectedItem}
          interval={selected}
          type="area"
          humi
          temp
        />
      </Column>
      <Row className="flex-1">
        <SensorDisplay sensor={selectedItem} className="flex flex-1 m-4" />
      </Row>
    </Card>
  )
}
