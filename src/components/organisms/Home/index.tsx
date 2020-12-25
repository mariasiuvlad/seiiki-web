import React from 'react'
import Head from 'next/head'
import cx from 'classnames'

import Card from 'components/atoms/Card'
import ConditionsCard from 'components/molecules/ConditionsCard'
import Schedule from 'components/molecules/Schedule/Suspense'

import style from './Home.module.css'

export default function Home() {
  return (
    <>
      <Head>
        <title>Homepage</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className={cx(style.root, 'fullscreen')}>
        <ConditionsCard />
        <Card className="m-8 p-8 rounded-md">
          <Schedule />
        </Card>
      </div>
    </>
  )
}
