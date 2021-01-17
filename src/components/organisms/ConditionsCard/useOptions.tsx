import React, {useState} from 'react'
import Select from 'components/atoms/Select'

export default function useOptions(options, initial = null): [any, React.FC<any>] {
  const [selected, setSelected] = useState(initial)

  const Control: React.FC<any> = (props) => (
    <Select
      options={options}
      value={selected}
      onChange={(e) => setSelected(e.target.value)}
      {...props}
    />
  )

  return [selected, Control]
}
