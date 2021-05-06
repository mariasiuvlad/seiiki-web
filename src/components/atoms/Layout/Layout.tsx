import React from 'react'
import {Column, Row} from '../Flex'

import style from './Layout.module.css'
import Button from '../Button'
import {useAuth} from 'context/provider'

const Layout = ({children}) => {
  const {user, isLoggedIn, logout} = useAuth()

  return (
    <Column className={style.root}>
      <Row className="justify-between bg-gray-800 h-12 flex-none items-center px-2 md:px-8 text-gray-200">
        <h1 className="text-2xl">Seiiki</h1>
        {isLoggedIn && (
          <Row className="items-center">
            <h2 className="font-light mr-4">Welcome, {user.username}</h2>
            <Button variant="secondary" label="Logout" onClick={logout} />
          </Row>
        )}
      </Row>
      {children}
    </Column>
  )
}

export default Layout
