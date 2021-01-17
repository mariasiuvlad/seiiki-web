import React from 'react'
import Head from 'next/head'
import cx from 'classnames'

import ConditionsCard from 'components/organisms/ConditionsCard/Suspense'
import HeatingAgentDisplay from 'components/molecules/HeatingAgentDisplay/Suspense'

import style from './Home.module.css'
import Card from 'components/atoms/Card'
import {Column} from 'components/atoms/Flex'

export default function Home() {
  return (
    <>
      <Head>
        <title>Homepage</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className={cx(style.root, 'fullscreen')}>
        <Column>
          <Card className="h-48 p-4 mb-4">
            <HeatingAgentDisplay className="flex flex-1" />
          </Card>
          <ConditionsCard className="w-96 h-96" />
        </Column>
      </div>
    </>
  )
}
