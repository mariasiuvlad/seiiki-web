import React from 'react'
import cx from 'classnames'

import ReadingChart from 'components/atoms/ReadingChart/Suspense'
import HeatingAgentDisplay from 'components/atoms/HeatingAgentDisplay/Suspense'
import SensorDisplay from 'components/atoms/SensorDisplay/Suspense'

import useCollapsible from './useCollapsible'
import useOptions from './useOptions'

import style from './ConditionsCard.module.css'

const options = [
  {value: 12, label: 'last 12 hours'},
  {value: 24, label: 'last 24 hours'},
  {value: 48, label: 'last 48 hours'}
]

export default function ConditionsCard() {
  const [isCollapsed, CollapseButton] = useCollapsible(true)
  const [selected, SelectControl] = useOptions(options)

  return (
    <div className={cx(style.card, 'flex flex-col')}>
      <div className="-m-px p-px bg-white dark:bg-gray-900">
        <div className="flex flex-row items-center px-2 pt-1 text-sm">
          <SelectControl className={style.intervalSelector} />
        </div>
        <CollapseButton className={style.collapseButton} />
        {isCollapsed ? (
          <ReadingChart interval={selected} humi temp />
        ) : (
          <>
            <ReadingChart interval={selected} humi />
            <ReadingChart interval={selected} temp />
          </>
        )}
      </div>
      <div className="flex flex-row">
        <SensorDisplay />
        <HeatingAgentDisplay className="border-l border-black dark:border-white border-opacity-30 flex-grow" />
      </div>
    </div>
  )
}
