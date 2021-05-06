import Auth from 'components/atoms/Auth'

import Layout from 'components/atoms/Layout'
import {useAuth} from 'context/provider'
import Router from 'next/router'
import {useEffect} from 'react'

export default function Login() {
  const {isLoggedIn, login} = useAuth()

  useEffect(() => {
    if (isLoggedIn) Router.push('/')
  }, [isLoggedIn])

  return (
    <Layout>
      <Auth onSubmit={login} />
    </Layout>
  )
}
