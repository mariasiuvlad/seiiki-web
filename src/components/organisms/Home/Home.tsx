import React, {Suspense} from 'react'
import cx from 'classnames'
import Head from 'next/head'

import {Loader} from 'icons'

import {Column, Row} from 'components/atoms/Flex'
import ErrorBoundary from 'components/atoms/ErrorBoundary'

import Weather from 'components/molecules/Weather'
import Conditions from 'components/molecules/Conditions'
import Schedule, {ScheduleExpanded} from 'components/molecules/Schedule'
import HeatingSwitch from 'components/molecules/HeatingSwitch'
import TwoHours from 'components/molecules/TwoHours'
import Dashboard from '../Dashboard'

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
  {widget: HeatingSwitch, className: 'h-14 w-full'},
  {widget: TwoHours, className: 'h-12'},
  {widget: Conditions, screen: Conditions, className: 'card h-56'},
  {widget: Schedule, screen: ScheduleExpanded, className: 'card h-56'},
  {widget: Weather, screen: Weather, className: 'card h-56'}
]

const Home: React.FC = () => {
  return (
    <>
      <Head>
        <title>Homepage</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Row className="md:w-full md:items-center justify-items-stretch p-4 gap-4 w-screen">
        <Column className="w-72 gap-2">
          {widgets.map(({widget: Component, className}) => {
            return (
              <Row className={className}>
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
        </Column>
        <Dashboard />
      </Row>
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
