import React from 'react'
import cx from 'classnames'
import Head from 'next/head'

import Card from 'components/atoms/Card'
import {Column, Row} from 'components/atoms/Flex'

import HeatingAgentDisplay from 'components/molecules/HeatingAgentDisplay/Suspense'
import Conditions from 'components/organisms/Conditions/Suspense'
import Weather from 'components/molecules/Weather'

import style from './Home.module.css'

export default function Home() {
  return (
    <>
      <Head>
        <title>Homepage</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className={cx(style.root)}>
        <Column>
          <Row className="px-4 my-4">
            <Card className="p-4 h-64 w-64 mr-4">
              <HeatingAgentDisplay className="flex-1" />
            </Card>
            <Card className="flex-grow h-64">
              <Weather />
            </Card>
          </Row>
          <Row className="mx-4">
            <Card className="h-96 w-full">
              <Conditions className="flex-1" />
            </Card>
          </Row>
        </Column>
      </div>
    </>
  )
}
