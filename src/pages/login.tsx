import Auth from 'components/atoms/Auth'
import useAuth from 'context/auth'

import Layout from 'components/atoms/Layout'
import Router from 'next/router'
import {useEffect} from 'react'

export default function Login() {
  const {isLoggedIn, onSubmit} = useAuth()

  useEffect(() => {
    // if (isLoggedIn) Router.push('/')
  }, [isLoggedIn])

  return (
    <Layout>
      <Auth onSubmit={onSubmit} />
    </Layout>
  )
}
