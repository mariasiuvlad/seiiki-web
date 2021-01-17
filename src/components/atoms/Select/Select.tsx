import React, {ChangeEvent} from 'react'
import cx from 'classnames'

import style from './Select.module.css'
import {CaretDown} from 'icons'
import {Row} from '../Flex'

interface SelectOption {
  value: any
  label: string
}

export interface SelectProps {
  /**
   * custom className
   */
  containerClassName?: string
  /**
   * custom className
   */
  controlClassName?: string
  /**
   * select options
   */
  options: SelectOption[]
  /**
   * form input name
   */
  name?: string
  /**
   * current value
   */
  value?: any
  /**
   * fires when the value is changed
   */
  onChange?: (event: ChangeEvent<HTMLSelectElement>) => void
}

const Select = React.forwardRef<HTMLSelectElement, SelectProps>(
  ({options, controlClassName, containerClassName, ...props}, ref) => {
    return (
      <Row className={cx(containerClassName, 'items-center justify-between')}>
        <select ref={ref} className={cx(controlClassName, style.control)} {...props}>
          {options.map(({value, label}) => (
            <option key={`${value}${label}`} value={value}>
              {label}
            </option>
          ))}
        </select>
        {/* <CaretDown className="fill-current w-3 h-3" /> */}
      </Row>
    )
  }
)

export default Select
