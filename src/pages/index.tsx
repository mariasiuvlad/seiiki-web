import Layout from 'components/atoms/Layout'
import HeatingAgentDisplay from 'components/HeatingAgentDisplay'
import Head from 'next/head'
import React from 'react'

export default function Home() {
  return (
    <>
      <Head>
        <title>Homepage</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout>
        <div className="flex flex-grow items-center justify-center">
          <HeatingAgentDisplay />
        </div>
      </Layout>
    </>
  )
}
