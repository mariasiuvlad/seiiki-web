import cx from 'classnames'
import * as Icons from 'icons'

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string
  label: string
  variant: 'primary' | 'secondary'
  onClick?(): void
}

export type IconName = keyof typeof Icons

const styles = {
  primary: 'btn-primary',
  secondary: 'btn-secondary'
}

const Button: React.FC<ButtonProps> = ({className = '', label, variant, ...rest}) => (
  <button className={cx(className, 'btn', styles[variant])} {...rest}>
    {label}
  </button>
)

export type IconButtonProps = {
  className?: string
  onClick(): void
  icon: keyof typeof Icons
}

export const IconButton: React.FC<IconButtonProps> = ({className, icon, onClick}) => {
  const Icon = Icons[icon]

  return (
    <button className={className} onClick={onClick}>
      <Icon className="w-6 h-6 fill-current" />
    </button>
  )
}

export default Button
