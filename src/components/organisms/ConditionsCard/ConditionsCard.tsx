import React from 'react'
import cx from 'classnames'

import ReadingChart from 'components/molecules/ReadingChart/Suspense'
import HeatingAgentDisplay from 'components/molecules/HeatingAgentDisplay/Suspense'
import SensorDisplay from 'components/molecules/SensorDisplay/Suspense'

import useOptions from './useOptions'

import style from './ConditionsCard.module.css'
import Card from 'components/atoms/Card'
import Typography from 'components/atoms/Typography'

const options = [
  {value: 12, label: 'last 12 hours'},
  {value: 24, label: 'last 24 hours'},
  {value: 48, label: 'last 48 hours'}
]

export default function ConditionsCard({className = ''}) {
  const [selected, SelectControl] = useOptions(options)

  return (
    <Card className={cx(className, style.root)}>
      <div className="flex flex-1 flex-col">
        <div className="flex flex-row items-center pr-4">
          <Typography
            as="h3"
            className="font-extralight text-4xl text-left text-shadow w-full m-4"
            text="History"
          />
          <SelectControl className={style.intervalSelector} />
        </div>
        <ReadingChart className="flex-grow w-full" type="area" interval={selected} humi temp />
      </div>
      <div className="flex flex-1 h-48">
        <SensorDisplay className="flex flex-1 m-4" />
        <div className="bg-gray-300 dark:bg-gray-900 w-px my-4" />
        <HeatingAgentDisplay className="flex flex-1 m-4" />
      </div>
    </Card>
  )
}
