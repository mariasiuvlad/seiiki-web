import React, {useState} from 'react'
import cx from 'classnames'
import Head from 'next/head'

import Layout from 'components/atoms/Layout'
import HeatingAgentDisplay from 'components/atoms/HeatingAgentDisplay'
import SensorDisplay from 'components/atoms/SensorDisplay'
import ReadingChart from 'components/atoms/ReadingChart'

import style from './Home.module.css'
import useCollapsible from './useCollapsible'
import {CaretDown} from 'icons'

const options = [
  {value: 12, label: 'last 12 hours'},
  {value: 24, label: 'last 24 hours'},
  {value: 48, label: 'last 48 hours'}
]

export default function Home() {
  const [isCollapsed, CollapseButton] = useCollapsible(true)
  const [interval, setInterval] = useState(12)

  return (
    <>
      <Head>
        <title>Homepage</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout>
        <div className="flex flex-grow items-center justify-center bg-white dark:bg-gray-900">
          <div className="relative flex flex-col rounded-md border bg-gray-50 dark:bg-gray-800 dark:border-gray-500">
            <div className="flex flex-row items-center px-2 pt-1 text-sm">
              <select
                onChange={(e) => setInterval(parseInt(e.target.value, 10))}
                className="appearance-none bg-transparent focus:outline-none self-start pr-5 z-10">
                {options.map(({value, label}) => (
                  <option key={`${value}${label}`} value={value}>
                    {label}
                  </option>
                ))}
              </select>
              <CaretDown className="fill-current w-3 h-3 -ml-4" />
            </div>
            <CollapseButton className={style.collapseButton} />
            <div>
              <ReadingChart
                interval={interval}
                humi
                temp
                className={cx({hidden: !isCollapsed})}
              />
              <ReadingChart
                interval={interval}
                humi
                className={cx({hidden: isCollapsed})}
              />
              <ReadingChart
                interval={interval}
                temp
                className={cx({hidden: isCollapsed})}
              />
            </div>
            <div className="flex flex-row">
              <SensorDisplay />
              <div className=" border-l dark:border-gray-500 flex-grow">
                <HeatingAgentDisplay />
              </div>
            </div>
          </div>
        </div>
      </Layout>
    </>
  )
}
