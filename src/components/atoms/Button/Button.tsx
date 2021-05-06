import cx from 'classnames'

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string
  label: string
  variant: 'primary' | 'secondary'
  onClick?(): void
}

const styles = {
  primary: 'btn-primary',
  secondary: 'btn-secondary'
}

const Button: React.FC<ButtonProps> = ({className = '', label, variant, ...rest}) => (
  <button className={cx(className, 'btn', styles[variant])} {...rest}>
    {label}
  </button>
)

export default Button
