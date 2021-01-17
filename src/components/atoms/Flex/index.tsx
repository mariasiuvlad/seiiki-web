import React from 'react'
import cx from 'classnames'

export const Row = ({className = '', children}) => (
  <div className={cx(className, 'flex flex-row')}>{children}</div>
)

export const Column = ({className = '', children}) => (
  <div className={cx(className, 'flex flex-col')}>{children}</div>
)
