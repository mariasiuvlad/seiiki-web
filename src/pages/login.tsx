import {useEffect} from 'react'
import Router from 'next/router'

import Auth from 'components/atoms/Auth'
import useAuth from 'context/auth'

export default function Login() {
  const {isLoggedIn, onSubmit} = useAuth()

  useEffect(() => {
    if (isLoggedIn) Router.push('/')
  }, [isLoggedIn])

  return <Auth onSubmit={onSubmit} />
}
