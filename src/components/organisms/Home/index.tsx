import React, {Suspense} from 'react'
import cx from 'classnames'
import Head from 'next/head'

import {Column} from 'components/atoms/Flex'

import HeatingAgentDisplay from 'components/molecules/HeatingAgentDisplay/Suspense'
import Conditions from 'components/organisms/Conditions/Suspense'
import Weather from 'components/molecules/Weather/Suspense'

import style from './Home.module.css'
import {Loader} from 'icons'
import ErrorBoundary from 'components/atoms/ErrorBoundary'

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
      <Column className={cx(style.root)}>
        <Column className={style.content}>
          <HeatingAgentDisplay className="card p-4 h-36 w-full md:mt-4" />
          <Weather className="card p-4 w-full my-4" />
          <Conditions className="card h-64 w-full md:mb-4" />
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
