import React, {Suspense} from 'react'
import cx from 'classnames'
import Head from 'next/head'

import {Loader} from 'icons'

import {Column, Row} from 'components/atoms/Flex'
import ErrorBoundary from 'components/atoms/ErrorBoundary'

import Weather from 'components/molecules/Weather'
import Conditions from 'components/molecules/Conditions'
import Schedule from 'components/molecules/Schedule'
import HeatingSwitch from 'components/molecules/HeatingSwitch'
import TwoHours from 'components/molecules/TwoHours'

const ErrorComponent = () => (
  <div className="h-full w-full flex items-center justify-center">
    <h1 className="self-center text-center flex-1 px-4">Something when wrong</h1>
  </div>
)

const Fallback: React.FC = () => (
  <div className="h-full w-full flex items-center justify-center">
    <Loader className="w-16 h-16 fill-current opacity-30" />
  </div>
)

const widgets = [
  {widget: HeatingSwitch},
  {widget: TwoHours},
  {widget: Conditions},
  {widget: Schedule},
  {widget: Weather}
]

const Widgets = () => (
  <>
    {widgets.map(({widget: Component, className = ''}) => {
      return (
        <Row className={className} key={Math.random()}>
          <Suspense
            fallback={
              <Row className={cx(className, 'items-center justify-center')}>
                <Loader className="w-16 h-16 fill-current opacity-30" />
              </Row>
            }>
            <Component className="rounded-b overflow-hidden w-full h-full" />
          </Suspense>
        </Row>
      )
    })}
  </>
)

const Home: React.FC = () => {
  return (
    <>
      <Head>
        <title>Homepage</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Column className="h-screen gap-2 p-2 max-w-lg">
        <Widgets />
      </Column>
    </>
  )
}

const HomeWithSuspense = () => {
  return (
    <ErrorBoundary fallback={<ErrorComponent />}>
      <Suspense fallback={<Fallback />}>
        <Home />
      </Suspense>
    </ErrorBoundary>
  )
}

export default HomeWithSuspense
