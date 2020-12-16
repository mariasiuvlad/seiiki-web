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
      <HeatingAgentDisplay />
    </>
  )
}
