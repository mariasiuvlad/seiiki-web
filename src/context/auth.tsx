import httpClient from 'lib/api'
import {getStorage, setStorage} from 'lib/storage'
import {useState, useCallback} from 'react'

export default function useAuth() {
  const [isLoggedIn, setLoggedIn] = useState<boolean>(getStorage('isLoggedIn') === 'true')

  const login = useCallback((data) => {
    httpClient('/api/auth/login', {data, method: 'POST'})
    setStorage('isLoggedIn', 'true')
    setLoggedIn(true)
  }, [])

  const logout = useCallback(() => {
    setStorage('isLoggedIn', 'false')
    setLoggedIn(false)
  }, [])

  return {isLoggedIn, login, logout}
}
