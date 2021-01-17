import React from 'react'
import cx from 'classnames'

import Card from 'components/atoms/Card'
import {Loader} from 'icons'

import style from './ConditionsCard.module.css'

export const Fallback = ({className}) => {
  return (
    <Card className={cx(className, style.root, 'items-center justify-center')}>
      <Loader className="w-16 h-16 fill-current opacity-30" />
    </Card>
  )
}

export const Error = ({className}) => {
  return (
    <Card className={cx(className, style.root, 'items-center justify-center')}>
      <p>Something went wrong</p>
    </Card>
  )
}
