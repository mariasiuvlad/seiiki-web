import React, {ChangeEvent} from 'react'
import cx from 'classnames'

import style from './Select.module.css'

interface SelectOption {
  value: any
  label: string
}

export interface SelectProps {
  /**
   * custom className
   */
  className?: string
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
  ({options, className, ...props}, ref) => {
    return (
      <select ref={ref} className={cx(className, style.control)} {...props}>
        {options.map(({value, label}) => (
          <option key={`${value}${label}`} value={value}>
            {label}
          </option>
        ))}
      </select>
    )
  }
)

export default Select
