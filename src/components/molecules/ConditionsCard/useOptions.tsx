import {CaretDown} from 'icons'
import React, {useState} from 'react'

export default function useOptions(
  options: Record<any, any>
): [any, React.FC<{className?: string}>] {
  const [selected, setSelected] = useState(12)

  const Control = ({className}) => (
    <>
      <select
        value={selected}
        onChange={(e) => setSelected(parseInt(e.target.value, 10))}
        className={className}>
        {options.map(({value, label}) => (
          <option key={`${value}${label}`} value={value}>
            {label}
          </option>
        ))}
      </select>
      <CaretDown className="fill-current w-3 h-3 -ml-4" />
    </>
  )

  return [selected, Control]
}
