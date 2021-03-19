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
        <Column className="md:self-center max-w-3xl bg-white dark:bg-gray-900">
          <Row className="mt-4 px-4">
            <Card className="p-4 h-32 flex-grow">
              <HeatingAgentDisplay className="flex-1" />
            </Card>
          </Row>
          <Row className="my-4 px-4">
            <Card className="p-4 flex-grow">
              <Weather className="flex-1" />
            </Card>
          </Row>
          <Row className="mb-4 px-4">
            <Card className="h-64 w-full">
              <Conditions className="flex-1" />
            </Card>
          </Row>
        </Column>
      </div>
    </>
  )
}
