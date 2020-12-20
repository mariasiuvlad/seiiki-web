import React from 'react'
import cx from 'classnames'
import Head from 'next/head'

import Layout from 'components/atoms/Layout'
import HeatingAgentDisplay from 'components/atoms/HeatingAgentDisplay'
import SensorDisplay from 'components/atoms/SensorDisplay'
import ReadingChart from 'components/atoms/ReadingChart'

import style from './Home.module.css'
import useCollapsible from './useCollapsible'

export default function Home() {
  const [isCollapsed, CollapseButton] = useCollapsible(true)

  return (
    <>
      <Head>
        <title>Homepage</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout>
        <div className="flex flex-grow items-center justify-center bg-white dark:bg-gray-900">
          <div className="relative flex flex-col rounded-md border bg-gray-50 dark:bg-gray-800 dark:border-gray-500">
            <CollapseButton className={style.collapseButton} />
            <div>
              <ReadingChart humi temp className={cx({hidden: !isCollapsed})} />
              <ReadingChart humi className={cx({hidden: isCollapsed})} />
              <ReadingChart temp className={cx({hidden: isCollapsed})} />
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
