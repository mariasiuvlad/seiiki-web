import Head from 'next/head'
import React from 'react'

import Layout from 'components/atoms/Layout'
import HeatingAgentDisplay from 'components/atoms/HeatingAgentDisplay'
import SensorDisplay from 'components/atoms/SensorDisplay'

export default function Home() {
  return (
    <>
      <Head>
        <title>Homepage</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout>
        <div className="flex flex-col flex-grow items-center justify-center">
          <div>
            <SensorDisplay />
            <HeatingAgentDisplay />
          </div>
        </div>
      </Layout>
    </>
  )
}
