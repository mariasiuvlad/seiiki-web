import cx from 'classnames'

export type ButtonProps = {
  className?: string
  label: string
  variant: 'primary' | 'secondary'
}

const styles = {
  primary: 'btn-primary',
  secondary: 'btn-secondary'
}

const Button: React.FC<ButtonProps> = ({className = '', label, variant}) => (
  <button className={cx(className, 'btn', styles[variant])}>{label}</button>
)

export default Button
