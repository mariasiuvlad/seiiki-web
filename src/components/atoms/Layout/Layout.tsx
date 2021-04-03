import React from 'react'
import {Column, Row} from '../Flex'
import useAuth from 'context/auth'

import style from './Layout.module.css'

const Layout = ({children}) => {
  const {isLoggedIn} = useAuth()
  return (
    <Column className={style.root}>
      <Row className="justify-between bg-gray-800 h-12 flex-none items-center px-2 md:px-8 text-gray-200">
        <h1 className="text-2xl">Seiiki</h1>
        {isLoggedIn && (
          <Row>
            <h2 className="hidden font-light">Welcome, Vlad</h2>
          </Row>
        )}
      </Row>
      {children}
    </Column>
  )
}

export default Layout
