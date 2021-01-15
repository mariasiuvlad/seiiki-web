import Select from 'components/atoms/Select'
import {CaretDown} from 'icons'
import React, {useState} from 'react'

export default function useOptions(options): [any, React.FC<{className?: string}>] {
  const [selected, setSelected] = useState(12)

  const Control = ({className}) => (
    <>
      <Select
        options={options}
        value={selected}
        onChange={(e) => setSelected(parseInt(e.target.value, 10))}
        className={className}
      />
      <CaretDown className="fill-current w-3 h-3 -ml-4" />
    </>
  )

  return [selected, Control]
}
