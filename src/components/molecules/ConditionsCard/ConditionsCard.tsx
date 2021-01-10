import React from 'react'
import cx from 'classnames'

import ReadingChart from 'components/atoms/ReadingChart/Suspense'
import HeatingAgentDisplay from 'components/atoms/HeatingAgentDisplay/Suspense'
import SensorDisplay from 'components/atoms/SensorDisplay/Suspense'

import useCollapsible from './useCollapsible'
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
  const [isCollapsed, CollapseButton] = useCollapsible(true)
  const [selected, SelectControl] = useOptions(options)

  return (
    <Card className={cx(className)}>
      <Typography
        as="h3"
        className="font-extralight text-4xl text-left text-shadow w-full m-4"
        text="History"
      />
      <div>
        <div className="flex items-center px-2 pt-1 text-sm">
          <SelectControl className={style.intervalSelector} />
        </div>
        <CollapseButton className={style.collapseButton} />
        {isCollapsed ? (
          <ReadingChart interval={selected} humi temp />
        ) : (
          <>
            <ReadingChart type="area" interval={selected} humi />
            <ReadingChart type="area" interval={selected} temp />
          </>
        )}
      </div>
      <div className="bg-gray-300 dark:bg-gray-900 h-px mx-4" />
      <div className="flex h-48">
        <SensorDisplay className="flex flex-1 m-4" />
        <div className="bg-gray-300 dark:bg-gray-900 w-px my-4" />
        <HeatingAgentDisplay className="flex flex-1 m-4" />
      </div>
    </Card>
  )
}
