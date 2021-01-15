import React from 'react'
import Head from 'next/head'
import cx from 'classnames'

import ConditionsCard from 'components/organisms/ConditionsCard'

import style from './Home.module.css'

export default function Home() {
  return (
    <>
      <Head>
        <title>Homepage</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className={cx(style.root, 'fullscreen')}>
        <ConditionsCard className="w-96 h-96" />
      </div>
    </>
  )
}
