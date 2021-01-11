import React from 'react'
import dynamic from 'next/dynamic'
import Auth from 'components/atoms/Auth'
import useAuth from 'context/auth'

const HomePage = dynamic(() => import('components/organisms/Home'), {
  ssr: false // disable ssr so we can use suspense
})

export default function Home() {
  const {isLoggedIn, onSubmit} = useAuth()

  if (!isLoggedIn) return <Auth onSubmit={onSubmit} />

  return <HomePage />
}
