import cx from 'classnames'
import style from './Switch.module.css'

export type SwitchProps = {
  className?: string
  isOn: boolean
  onClick?: () => void
}

const Switch: React.FC<SwitchProps> = ({className = '', isOn, onClick = () => null}) => (
  <button
    className={cx(className, style.toggle, {[style.toggleOn]: isOn, [style.toggleOff]: !isOn})}
    onClick={onClick}>
    <div className={cx(style.knob, {[style.knobOn]: isOn, [style.knobOff]: !isOn})} />
  </button>
)

export default Switch
