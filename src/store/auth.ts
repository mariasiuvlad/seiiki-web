import httpClient from 'lib/api'
import create from 'zustand'
import {path, pipe, prop} from 'ramda'
import log from './middleware/log'
import persist from './middleware/persist'

type TRequestData = {
  username: string
  password: string
}

type TUserData = {
  uuid: string
  username: string
}

type TAuthStore = {
  user: TUserData
  login(data: unknown): Promise<void>
  logout(): void
}

// @TODO move to api
const login: (data: TRequestData) => Promise<TUserData> = (data) =>
  httpClient('/api/auth/login', {data, method: 'POST'})

const createStore = pipe(
  log,
  persist({
    name: 'auth-storage'
  }),
  create
)
const useAuth = createStore((set) => ({
  user: undefined,
  login: async (data) => {
    set({user: await login(data)})
  },
  logout: () => set({user: undefined})
}))

export default useAuth

export const selectors = {
  isLoggedIn: pipe(
    path<TAuthStore>(['user']),
    Boolean
  )
}

export const actions = {
  login: prop('login'),
  logout: prop('logout')
}
