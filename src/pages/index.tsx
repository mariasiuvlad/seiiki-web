import React, {useEffect} from 'react'
import dynamic from 'next/dynamic'
import Router from 'next/router'
import Layout from 'components/atoms/Layout'
import {useAuth} from 'context/provider'

const HomePage = dynamic(() => import('components/organisms/Home'), {
  ssr: false // disable ssr so we can use suspense
})

export default function Home() {
  const {isLoggedIn} = useAuth()
  console.log('@isLoggedIn', isLoggedIn)

  useEffect(() => {
    if (!isLoggedIn) Router.push('/login')
  }, [isLoggedIn])

  return (
    <Layout>
      <HomePage />
    </Layout>
  )
}
