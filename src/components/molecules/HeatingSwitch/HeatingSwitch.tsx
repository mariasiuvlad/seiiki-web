import cx from 'classnames'
import {Column} from '../../atoms/Flex'
import useHeatingAgent from 'hooks/useHeatingAgent'

import style from './HeatingSwitch.module.css'
import {ParagraphTertiary, TitlePrimary} from 'components/atoms/Typography'
import React, {useMemo} from 'react'
import {always, cond, equals} from 'ramda'
import {Loader} from 'icons'
import Switch from 'components/atoms/Switch'

const HeatingSwitch = ({className = '', useHeatingHook = useHeatingAgent}) => {
  const {isOn, onToggle} = useHeatingHook()
  const isConnecting = useMemo(() => isOn === undefined, [isOn])

  return (
    <div className={cx(className, style.root, {[style.rootOn]: isOn, [style.rootOff]: !isOn})}>
      <Column className="items-start">
        <TitlePrimary light>Heating</TitlePrimary>
        <ParagraphTertiary
          light
          className={cx(style.status, {[style.statusOn]: isOn, [style.statusOff]: !isOn})}>
          {isConnecting ? 'Connecting...' : isOn ? 'On' : 'Off'}
        </ParagraphTertiary>
      </Column>
      {cond([
        [equals(false), always(<Switch onClick={onToggle} isOn={isOn} />)],
        [equals(true), always(<Loader className="w-8 h-8 fill-current opacity-30" />)]
      ])(isConnecting)}
    </div>
  )
}

export default HeatingSwitch
