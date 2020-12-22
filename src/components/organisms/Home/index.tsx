import React from 'react'
import Head from 'next/head'
import cx from 'classnames'

import ConditionsCard from 'components/molecules/ConditionsCard'

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
      </div>
    </>
  )
}
