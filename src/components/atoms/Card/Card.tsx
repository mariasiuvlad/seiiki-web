import React from 'react'
import cx from 'classnames'

import style from './Card.module.css'

const Card = ({className = '', children}) => {
  return <div className={cx(style.root, className)}>{children}</div>
}

export default Card
