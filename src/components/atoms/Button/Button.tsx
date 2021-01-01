import React from 'react'
import cx from 'classnames'

import style from './Button.module.css'

export interface ButtonProps
  extends React.DetailedHTMLProps<
    React.ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  > {
  /**
   * Is this the principal call to action on the page?
   */
  primary?: boolean
  /**
   * What background color to use
   */
  backgroundColor?: string
  /**
   * Button contents
   */
  label: string
  /**
   * Optional click handler
   */
  onClick?: () => void
}

/**
 * Primary UI component for user interaction
 */
const Button: React.FC<ButtonProps> = ({
  className = '',
  primary = false,
  backgroundColor,
  label,
  ...props
}) => {
  return (
    <button
      className={cx(className, style.button, {
        [style.primary]: primary,
        [style.secondary]: !primary
      })}
      style={{backgroundColor}}
      {...props}>
      {label}
    </button>
  )
}

export default Button
