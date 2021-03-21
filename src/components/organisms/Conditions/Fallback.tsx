import React from 'react'
import cx from 'classnames'

import {Loader} from 'icons'

import style from './Conditions.module.css'
import {Column} from 'components/atoms/Flex'

export const Fallback = ({className}) => {
  return (
    <Column className={cx(className, style.root, 'card items-center justify-center')}>
      <Loader className="w-16 h-16 fill-current opacity-30" />
    </Column>
  )
}

export const Error = ({className}) => {
  return (
    <Column className={cx(className, style.root, 'items-center justify-center')}>
      <p>Something went wrong</p>
    </Column>
  )
}
