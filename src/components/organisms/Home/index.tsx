import React from 'react'
import cx from 'classnames'
import Head from 'next/head'
import Div100vh from 'react-div-100vh'

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
      <Div100vh className={cx(style.root)}>
        <Row className="flex-wrap justify-center">
          <Column className="items-center mb-4">
            <Card className="h-48 p-4 mb-4 w-full xs:w-96">
              <HeatingAgentDisplay className="flex-1" />
            </Card>
            <Card className="h-96 w-full xs:w-96">
              <Conditions className="flex-1" />
            </Card>
          </Column>
          <Column className="items-center">
            <Card className="md:ml-4 md:h-48 w-full xs:w-96">
              <Weather />
            </Card>
          </Column>
        </Row>
      </Div100vh>
    </>
  )
}
