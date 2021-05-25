import cx from 'classnames'
import React from 'react'
import Icon, {IconType} from '../Icon/Icon'

const styles = {
  primary: 'btn-primary',
  secondary: 'btn-secondary',
  none: ''
}

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string
  label?: string
  icon?: IconType
  variant?: keyof typeof styles
  onClick?(): void
}

const Button: React.FC<ButtonProps> = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({className = '', icon, label, variant = 'none', ...rest}, ref) => {
    return (
      <button ref={ref} className={cx(className, 'btn', styles[variant])} {...rest}>
        {label}
        {icon && <Icon name={icon} className="w-4 h-4" />}
      </button>
    )
  }
)

export default Button
