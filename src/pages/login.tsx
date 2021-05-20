import Auth from 'components/atoms/Auth'

import Layout from 'components/atoms/Layout'
import useAuth, {selectors} from 'store/auth'
import Router from 'next/router'
import {useEffect} from 'react'

export default function Login() {
  const isLoggedIn = useAuth(selectors.isLoggedIn)
  const login = useAuth((state) => state.login)

  useEffect(() => {
    if (isLoggedIn) Router.push('/')
  }, [isLoggedIn])

  return (
    <Layout>
      <Auth onSubmit={login} />
    </Layout>
  )
}
