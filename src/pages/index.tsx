import React, {useCallback, useState} from 'react'
import dynamic from 'next/dynamic'
import {getStorage, setStorage} from 'lib/storage'
import Auth from 'components/atoms/Auth'

const HomePage = dynamic(() => import('components/organisms/Home'), {
  ssr: false // disable ssr so we can use suspense
})

export default function Home() {
  const [isLoggedIn, setLoggedIn] = useState<boolean>(!!getStorage('isLoggedIn'))
  const onSubmit = useCallback((password) => {
    if (password === process.env.NEXT_PUBLIC_NAIVE_AUTH_PASSWORD) {
      setStorage('isLoggedIn', true)
      setLoggedIn(true)
    }
  }, [])

  if (!isLoggedIn) return <Auth onSubmit={onSubmit} />

  return <HomePage />
}
