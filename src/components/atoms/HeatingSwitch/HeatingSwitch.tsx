import cx from 'classnames'
import {Column} from '../Flex'
import useHeatingAgent from 'hooks/useHeatingAgent'

import style from './HeatingSwitch.module.css'

const HeatingSwitch = ({className = '', useHeatingHook = useHeatingAgent}) => {
  const {isOn, onToggle} = useHeatingHook()
  const variableStyle = {[style.isOn]: isOn, [style.isOff]: !isOn}

  return (
    <div className={cx(className, style.root, variableStyle)}>
      <Column className="items-start">
        <p className={style.title}>Heating</p>
        <p className={cx(style.status, variableStyle)}>
          {isOn === undefined ? 'Connecting...' : isOn ? 'On' : 'Off'}
        </p>
      </Column>
      <button className={cx(style.toggle, variableStyle)} onClick={onToggle}>
        <div className={cx(style.knob, variableStyle)} />
      </button>
    </div>
  )
}

export default HeatingSwitch
