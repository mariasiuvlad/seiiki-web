import React, {Suspense} from 'react'
import Head from 'next/head'

import {Loader} from 'icons'

import {Column} from 'components/atoms/Flex'
import Conditions from 'components/organisms/Conditions/Suspense'
import Weather from 'components/molecules/Weather/Suspense'
import ErrorBoundary from 'components/atoms/ErrorBoundary'
import Schedule from 'components/molecules/Schedule'
import HeatingSwitch from 'components/atoms/HeatingSwitch'
import TwoHours from 'components/atoms/TwoHours'

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

const Home: React.FC = () => {
  return (
    <>
      <Head>
        <title>Homepage</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Column className="md:w-full md:items-center">
        <Column className="mx-4 max-w-xl">
          <HeatingSwitch className="w-full my-4" />
          <TwoHours className="mb-4" />
          <Schedule className="card px-4 py-2" />
          <Conditions className="card w-full h-64 mt-4 rounded-md" />
          <Weather className="card p-4 my-4" />
        </Column>
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
