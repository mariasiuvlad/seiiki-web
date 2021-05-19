import httpClient from 'lib/api'
import {setStorage} from 'lib/storage'
import {useState, createContext, useContext, useCallback, useMemo} from 'react'

type UserInfo = {
  username: string
}

type TAuthContext = {
  user: UserInfo
}

type TAuthProvider = {
  user: UserInfo
  isLoggedIn: boolean
  login(data: unknown): Promise<void>
  logout(): void
}

const authContext = createContext<TAuthProvider>(null)

export const useAuth = () => useContext(authContext)

function useProvideAuth(initial: TAuthContext): TAuthProvider {
  const [state, setState] = useState(initial)

  const login = useCallback(async (data) => {
    const res = await httpClient('/api/auth/login', {data, method: 'POST'})
    setState({user: res})
  }, [])

  const logout = useCallback(() => {
    setStorage('isLoggedIn', 'false')
    setState({user: undefined})
  }, [])

  const isLoggedIn = useMemo(() => !!state.user, [state])

  return {login, logout, isLoggedIn, ...state}
}

export default function AuthProvider({children, initialValue}) {
  const context = useProvideAuth(initialValue)
  return <authContext.Provider value={context}>{children}</authContext.Provider>
}
