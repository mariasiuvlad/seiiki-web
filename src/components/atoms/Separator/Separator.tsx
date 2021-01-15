import React from 'react'
import cx from 'classnames'

const Separator = ({className = '', vertical = false, horizontal = false}) => {
  return (
    <div
      className={cx(className, 'bg-gray-300 dark:bg-gray-900', {
        'w-px': vertical,
        'h-px': horizontal
      })}
    />
  )
}

export default Separator
