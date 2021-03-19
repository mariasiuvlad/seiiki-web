import React, {useEffect} from 'react'
import dynamic from 'next/dynamic'
import useAuth from 'context/auth'
import Router from 'next/router'

const HomePage = dynamic(() => import('components/organisms/Home'), {
  ssr: false // disable ssr so we can use suspense
})

export default function Home() {
  const {isLoggedIn} = useAuth()

  useEffect(() => {
    if (!isLoggedIn) Router.push('/login')
  }, [isLoggedIn])

  return <HomePage />
}
